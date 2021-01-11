import { useGlobalIconFont } from './components/Iconfont/helper'

export default {
  usingComponents: Object.assign(useGlobalIconFont()),
  pages: [
    'pages/test/index',
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
