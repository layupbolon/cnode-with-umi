import _ from 'lodash';

import * as services from '../../../services';

export default {

    namespace: 'user',

    state: {
        userData: {}
    },

    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                const result = _.split(_.trimStart(pathname, '/'), '/');
                if (result[0] === 'user') {
                    dispatch({ type: 'getUserData', payload: { userName: result[1] }});
                }
            });
        },
    },

    reducers: {
        changeState(state, { payload }) {
            // return { ...state, ...{ [payload.key]: payload.value }};
            state[payload.key] = payload.value;
        },
    },

    effects: {
        * getUserData({ payload }, { call, put }) {
            const userData = yield call(services.GetUserData, payload.userName);

            yield put({
                type: 'changeState',
                payload: { key: 'userData', value: userData.data.data }
            });
        },

    },
};
