import * as services from '../../../services';

export default {

    namespace: 'msg',

    state: {
        has_read_messages: [],
        hasnot_read_messages: [],
    },

    reducers: {
        changeState(state, { payload }) {
            // return { ...state, ...{ [payload.key]: payload.value }};
            state[payload.key] = payload.value;
        },
    },

    effects: {
        * GetMsg({ payload }, { call, put, all }) {
            const result = yield call(services.GetMsg, payload.accesstoken);

            yield all([
                put({
                    type: 'changeState',
                    payload: { key: 'has_read_messages', value: result.data.data.has_read_messages }
                }),
                put({
                    type: 'changeState',
                    payload: { key: 'hasnot_read_messages', value: result.data.data.hasnot_read_messages }
                })
            ]);
        },
    },
};
