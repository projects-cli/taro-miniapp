import { Model } from 'dva-core';
import { Reducer } from 'redux';

export interface StateType {
	isOffline: boolean;
}

interface ModelType {
	namespace: string;
	state: StateType;
	effects: {};
	reducers: {
		changeOfflineStatus: Reducer;
	};
}

const AppModel: Model & ModelType = {
	namespace: 'app',
	state: {
		isOffline: false
	},

	effects: {},

	reducers: {
		changeOfflineStatus(state, { payload: { isOffline } }) {
			return {
				...state,
				isOffline
			}
		}
	}
}

export default AppModel
