import _ from 'lodash';

import * as services from '../../../services';

export default {

  namespace: 'topicDetail',

  state: {
    dataSource: {},
    replyItems: [],
  },

  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname}) => {
        const result = _.split(_.trimStart(pathname, '/'), '/');
        if (result[0] === 'topicDetail') {
          const storageResult = JSON.parse(localStorage.getItem('User'));
          dispatch({type: 'getTopicDetailData', payload: {id: result[1], accesstoken: storageResult.accesstoken}});
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
      const {id, accesstoken} = payload;
      const topicData = yield call(services.GetTopicDetail, id, accesstoken);

      yield put({
        type: 'changeState',
        payload: {key: 'dataSource', value: topicData.data.data}
      });
      yield put({
        type: 'changeState',
        payload: {key: 'replyItems', value: topicData.data.data.replies}
      });
    },

    * replyUp({payload}, {call, put, select}) {
      const {reply_id, accesstoken} = payload;
      const result = yield call(services.replyUp, reply_id, accesstoken);
      if (result && result.data && result.data.success) {
        let {replyItems} = yield select(state => ({
            replyItems: state.topicDetail.replyItems
          })
        );

        replyItems.forEach((item) => {
          if (item.id === reply_id) {
            if (result.data.action === 'up') {
              item.is_uped = true;
              item.ups.push(reply_id);
            }
            if (result.data.action === 'down') {
              item.is_uped = false;
              item.ups.length = item.ups.length - 1;
            }
          }
        });

        yield put({
          type: 'changeState',
          payload: {key: 'replyItems', value: replyItems}
        });
      }
    }
  },
};
