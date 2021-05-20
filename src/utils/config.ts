import { getAccountInfoSync } from '@tarojs/taro'

// 获取当前帐号信息
const accountInfo = getAccountInfoSync()
// env类型
export const env = accountInfo.miniProgram.envVersion

if (!env) {
  console.error('获取运行环境失败!')
}

const config = {
  baseApi: {
    develop: 'https://dev.yepine.com/api',
    trial: 'https://test.yepine.com/api',
    release: 'https://www.yepine.com/api'
  }
  // fundebug: {
  //   develop: 'e45789d947490248bcd01dfcd1afcaa9264ec89452e79fb0a74220faab1c3de3',
  //   trial: 'e45789d947490248bcd01dfcd1afcaa9264ec89452e79fb0a74220faab1c3de3',
  //   release: 'f8ac24aa5587186b17c18aea2e1c168e60860c09b548fc8ef741e931892d7be8'
  // }
}

const origin = config.baseApi[env]

export const api = {
  GQL: `${origin}/graphql`,
  REST: origin
}

// export const fundebug = config.fundebug[env]
