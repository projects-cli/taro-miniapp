import React from 'react'
import { Provider } from 'react-redux'
import { dva, regExp } from '@/utils/index'
import models from '@/models'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const dvaApp = dva.createApp({
  initialState: {},
  models
});
const store = dvaApp.getStore();

const App = ({children}) => {
  return <Provider store={store}>{children}</Provider>
}

export default App
