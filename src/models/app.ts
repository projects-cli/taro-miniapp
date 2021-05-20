import { Model } from 'dva-core'

export interface StateType {
  tabIndex: number;
}

interface ModelApp {
  state: StateType
}

const AppModel: Model & ModelApp = {
  namespace: 'app',
  state: {
    tabIndex: 0
  },

  effects: {},

  reducers: {
    changeIndex (state, { payload }) {
      return { ...state, ...payload }
    }
  }
}

export default AppModel
