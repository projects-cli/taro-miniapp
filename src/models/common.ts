import Taro from '@tarojs/taro'

export default {
  namespace: 'common',
  state: {
    accessToken: Taro.getStorageSync('accessToken'),
    userInfo: Taro.getStorageSync('userInfo')
  },

  effects: {
    * test () {
      console.log('start')
      yield setTimeout(() => {
        console.log(12)
      })
    }
  },

  reducers: {
    save (state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
