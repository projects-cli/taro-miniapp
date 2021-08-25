import { getAccountInfoSync } from '@tarojs/taro'

// 获取当前帐号信息
const accountInfo = getAccountInfoSync()
// env类型
export const env = accountInfo.miniProgram.envVersion

if (!env) {
  console.error('获取运行环境失败!')
}

export const config = {
  baseApi: {
    development: 'https://dev.yepine.com/api',
    develop: 'https://dev.yepine.com/api',
    prepare: 'https://test.yepine.com/api',
    trial: 'https://test.yepine.com/api',
    production: 'https://www.yepine.com/api',
    release: 'https://www.yepine.com/api'
  }
}

type FetchEnv = 'development' | 'develop' | 'prepare' | 'trial' | 'production' | 'release'
export const getApi = (fetchEnv: FetchEnv = env): string => config.baseApi[fetchEnv]
