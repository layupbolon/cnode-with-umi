import * as services from '../../../services';

export default {

  namespace: 'topicDetail',

  state: {
    dataSource: []
  },

  reducers: {
    changeState(state, {payload}) {
      return {...state, ...{[payload.key]: payload.value}};
    },
  },

  effects: {
    * getTopicDetailData({payload}, {call, put}) {
      const topicData = yield call(services.GetTopicDetail, payload.id);

      yield put({
        type: 'changeState',
        payload: {key: 'dataSource', value: topicData.data.data}
      })
    },
  },
};
