import Taro from '@tarojs/taro';

export default {
  namespace: 'common',
  state: {
    accessToken: Taro.getStorageSync('accessToken'),
    userInfo: Taro.getStorageSync('userInfo')
  },

  effects: {},

  reducers: {
    // get(state, {}) {

    // },
    save(state, { payload }) {
      console.log('common/save')
      return { ...state, ...payload };
    }
  }
};
