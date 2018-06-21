import * as services from '../../../services';

const initState = {
    headSelectedIndex: 0,
    topicDatasource: [],
    pageIndex: 1,
    pageSize: 10,
    tab: 'all',
};

export default {

    namespace: 'topicList',

    state: initState,

    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/topicList') {
                    dispatch({ type: 'getTopicData' });
                }
            });
        },
    },

    reducers: {
        changeState(state, { payload }) {
            // return { ...state, ...{ [payload.key]: payload.value }};
            state[payload.key] = payload.value;
        },
        initState(state, { payload }) {
            return initState;
        }
    },

    effects: {
        * getTopicData({ payload }, { call, put, select }) {
            const setting = yield select(state => ({
                pageIndex: state.topicList.pageIndex,
                pageSize: state.topicList.pageSize,
                tab: state.topicList.tab
            })
            );
            const topicData = yield call(services.GetTopics, setting);

            let { topicDatasource } = yield select(state => ({
                topicDatasource: state.topicList.topicDatasource
            }));
            yield put({
                type: 'changeState',
                payload: { key: 'topicDatasource', value: topicDatasource.concat(topicData.data.data) }
            });
        },

        * tabChange({ payload }, { put }) {
            yield put({ type: 'changeState', payload: { key: 'tab', value: payload.tab }});
            yield put({ type: 'getTopicData' });
        },

        * getNextPageTopicData({ payload }, { put, select }) {
            const { pageIndex } = yield select(state => ({ pageIndex: state.topicList.pageIndex }));
            yield put({ type: 'changeState', payload: { key: 'pageIndex', value: pageIndex + 1 }});
            yield put({ type: 'getTopicData' });
        },
    },
};
