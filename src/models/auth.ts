import { Model } from 'dva-core'
import { Effect } from 'dva'
import { Reducer } from 'redux'
import { authService } from '@/service'

export interface StateType {
  accountState: string;
}

interface ModelType {
  namespace: string;
  state: StateType;
  effects: Effect;
  reducers: {
    save: Reducer;
  };
}

const AuthModel: Model & ModelType = {
  namespace: 'auth',
  state: {},

  effects: {
    * login (_, { call }) {
      const res = yield call(authService.testGqlLogin)
      console.log(27, res)
    }
  },

  reducers: {}
}

export default AuthModel
