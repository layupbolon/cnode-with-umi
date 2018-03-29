import _ from 'lodash';

import * as services from '../../../services';

export default {

  namespace: 'topicDetail',

  state: {
    dataSource: []
  },

  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname}) => {
        const result = _.split(_.trimStart(pathname, '/'), '/');
        if (result[0] === 'topicDetail') {
          dispatch({type: 'getTopicDetailData', payload: {id: result[1]}});
        }
      });
    },
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
