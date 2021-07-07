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
}

export const api = config.baseApi[env]
