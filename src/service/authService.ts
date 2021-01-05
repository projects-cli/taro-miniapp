import Taro from '@tarojs/taro'
import { client } from '@/utils'
import { LOGIN } from 'src/api/auth'

export const testGqlLogin = (): Promise<any> =>
  client.query({
    query: LOGIN,
    variables: {
      type: 'phone',
      phoneNumber: '17620332255',
      countryCode: 'CN',
      password: '1!qQww'
    },
    context: {
      // isIgnoreErrors: true
    }
  })

/**
 * 整合登录
 */
export const login = async () => {
  const isLogin = await checkLogin()
  if (isLogin) return
  const wxLoginRes = await wxLogin()
  const wxUserInfo = await wxGetUserInfo()

  return {
    wxLoginRes,
    wxUserInfo
  }
  // const res: any = await request({
  //   method: 'GET',
  //   url: '',
  //   data: { code: wxLoginRes.code, userInfo: wxUserInfo }
  // });
  // if (res.errno === 0) {
  //   //存储用户信息
  //   Taro.setStorageSync('userInfo', res.data.userInfo);
  //   Taro.setStorageSync('token', res.data.token);
  //   return res;
  // } else {
  //   Taro.showToast({
  //     title: '登录失败'
  //   });
  //   return;
  // }
}

/**
 * 微信登录
 */
export const wxLogin = () => {
  return Taro.login()
}

/**
 * 检查是否登录
 */
export const checkLogin = () => {
  return Taro.getStorageSync('token')
}

/**
 * 获取用户信息
 */
export const wxGetUserInfo = () => {
  return Taro.getUserInfo({
    lang: 'zh_CN',
    withCredentials: true
  })
}
