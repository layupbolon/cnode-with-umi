import * as services from '../../../services';

export default {

    namespace: 'login',

    state: {},

    reducers: {
        changeState(state, { payload }) {
            // return { ...state, ...{ [payload.key]: payload.value }};
            state[payload.key] = payload.value;
        },
    },

    effects: {
        * login({ payload }, { call }) {
            let result = yield call(services.Login, payload.accesstoken);
            if (result.data && result.data.success) {
                result.data.accesstoken = payload.accesstoken;
                localStorage.setItem('User', JSON.stringify(result.data));
                payload.cb && payload.cb(true, '登录成功');

            } else {
                payload.cb && payload.cb(false, '登录失败');
            }
        },

        // eslint-disable-next-line require-yield
        * logout({ payload }, { call }) {
            localStorage.removeItem('User');
            payload.cb && payload.cb();
        }
    },
};
