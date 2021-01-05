import { ApolloClient, InMemoryCache, from, ApolloLink, Operation, NextLink } from '@apollo/client'
import { onError, ErrorResponse } from '@apollo/client/link/error'
import { BatchHttpLink } from '@apollo/client/link/batch-http'
import { RetryLink } from '@apollo/client/link/retry'
import ApolloLinkTimeout from 'apollo-link-timeout'
import fetch from 'cross-fetch'
import Taro, { ENV_TYPE } from '@tarojs/taro'
import { prop } from 'ramda'

const WxFetch = (url, { body: data, ...fetchOptions }) => {
  // Taro.request默认会对res做JSON.parse，但apollo-http-link需要text，也要做一次JSON.parse
  // 所以要让微信返回text,需做如下配置：dataType: 'txt', responseType: 'text'
  // dataType String否json如果设为json，会尝试对返回的数据做一次 JSON.parse
  // responseType String否text设置响应的数据类型。合法值：text、arraybuffer

  return Taro.request({
    url,
    data,
    ...fetchOptions,
    dataType: 'text',
    responseType: 'text'
  }).then((response) => ({
    text: () => Promise.resolve(response.data)
  }))
}

const uri = 'http://127.0.0.1:1111/graphql'

// 鉴权
const authLink = new ApolloLink((operation: Operation, forward: NextLink) => {
  console.log('gql authLink')
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization:
        Taro.getEnv() === ENV_TYPE.WEB
          ? localStorage.getItem('token')
          : Taro.getStorageSync('token') || null
    }
  }))

  return forward(operation)
})

// 错误处理
const errorLink = onError(({ graphQLErrors, networkError, response, operation }: ErrorResponse) => {
  /**
   * 如果要有条件地忽略错误，可以response.errors = null;在错误处理程序中进行设置
   * 此方案需要预设配置数据，比如设置一个忽略列表ignoreErrors匹配进行忽略
   */
  // if (ignoreErrors.includes(operation.operationName)) {
  //   response.errors = null;
  // }

  /**
   * 如果要有条件地忽略错误，可以response.errors = null;在错误处理程序中进行设置
   * 此方案在请求时通过context传递参数即可，更加灵活，例如：
   * client.query({ query: TEST, context: { isIgnoreErrors: true }});
   */
  const { isIgnoreErrors } = operation.getContext()
  if (isIgnoreErrors) {
    response.errors = null
  }

  if (graphQLErrors && !isIgnoreErrors) {
    const msg: string[] = []
    graphQLErrors.forEach(({ message, locations, path }) => {
      msg.push(message)
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    })
    Taro.showToast({ title: msg.join(',') || '服务器错误', icon: 'none' })
  }

  if (networkError) {
    Taro.showToast({
      title: prop('message', networkError) || prop('errMsg', networkError) || JSON.stringify(networkError) || '服务器错误',
      icon: 'none'
    })
  }
})

// 替代 link-http 多个request自动打包发送
const httpLink = new BatchHttpLink({
  uri, // 配置请求url
  fetch: Taro.getEnv() === ENV_TYPE.WEB ? fetch : WxFetch
})

// 重试
const retryLink = new RetryLink({
  delay: {
    initial: 100,
    max: 2000,
    jitter: true
  },
  attempts: {
    max: 3,
    retryIf: (error) => {
      // const doNotRetryCodes = [500, 400];
      // return !!error && !doNotRetryCodes.includes(error.statusCode);

      /**
       * 408 请求超时
       * 只有请求超时才会重新请求
       */
      return prop('statusCode', error) === 408
    }
  }
})

// 超时
const timeoutLink = new ApolloLinkTimeout(10000) // 10s

// 日志
const loggerLink = new ApolloLink((operation, forward) => {
  operation.setContext({ start: new Date().getTime() })
  return forward(operation).map((response) => {
    const responseTime = new Date().getTime() - operation.getContext().start
    console.log(`${operation.operationName} 请求耗时: ${responseTime}`)
    return response
  })
})

// // 修改响应数据
// const addDateLink = new ApolloLink((operation: Operation, forward: NextLink) => {
//   console.log('addDateLink')
//   return forward(operation).map(response => {
//     response.data.date = new Date();
//     console.log('gql addDateLink', response.data)
//     return response;
//   });
// });

/**
 * Apollo中间件文档 https://www.apollographql.com/docs/react/networking/advanced-http-networking/
 * 不知道为什么将addDateLink、usdToEurLink放在httpLink前面请求只触发一次，会执行usdToEurLink但不执行addDateLink
 * 将addDateLink、usdToEurLink放在httpLink后面请求没问题，但addDateLink、usdToEurLink都不执行
 */
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([retryLink, loggerLink, timeoutLink, authLink, errorLink, httpLink]),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore'
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all'
    },
    mutate: {
      errorPolicy: 'all'
    }
  }
})

export default client
