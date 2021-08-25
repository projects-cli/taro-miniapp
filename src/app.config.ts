// 获取页面路径
const getPages = () => {
  const path = [
    'pages/index/index',
    'pages/home/index',
    'pages/other/index',
    'pages/me/index'
  ]

  // // 非生产环境注册debug承载页
  // if (process.env.NODE_ENV !== 'production') {
  //   path.push('pages/debug/index')
  // }

  return path
}

export default {
  pages: getPages(),
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom' // 自定义导航
  },
  subpackages: [
    {
      root: 'subPackages/debug',
      name: 'debug',
      pages: [
        'debug/index' // 调试
      ]
      // independent: true //独立分包getApp获取为空，debug库用到了getApp方法故不能配置独立分包
    }
  ],
  tabBar: {
    custom: true,
    color: 'rgba(0, 0, 0, 0.6)',
    selectedColor: 'rgba(0, 162, 0, 1)',
    backgroundColor: '#fff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页'
      },
      {
        pagePath: 'pages/me/index',
        text: '我的'
      }
    ]
  },
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示' // 高速公路行驶持续后台定位
    }
  }
}
