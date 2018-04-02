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
          const storageResult = localStorage.getItem('User');
          if (storageResult) {
            const userInfo = JSON.parse(storageResult);
            dispatch({type: 'getTopicDetailData', payload: {id: result[1], accesstoken: userInfo.accesstoken}});
          } else {
            dispatch({type: 'getTopicDetailData', payload: {id: result[1]}});
          }
        }
      });
    },
  },

  reducers: {
    changeState(state, {payload}) {
      return {...state, ...{[payload.key]: payload.value}};
    },
    initState(state, {payload}) {
      return {
        dataSource: {},
        replyItems: [],
      }
    }
  },

  effects: {
    * getTopicDetailData({payload}, {call, put}) {
      yield put({type: 'initState'});

      const {id, accesstoken} = payload;
      const topicData = yield call(services.GetTopicDetail, id, accesstoken);

      yield put({
        type: 'changeState',
        payload: {key: 'dataSource', value: topicData.data.data}
      });

      if (topicData.data.data.replies && topicData.data.data.replies.length > 0) {
        topicData.data.data.replies.forEach(item => {
          item.showReplyBox = false;
        });
        yield put({
          type: 'changeState',
          payload: {key: 'replyItems', value: topicData.data.data.replies}
        });
      }
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
    },

    * showReplyBox({payload}, {put, select}) {
      const {index} = payload;
      let {replyItems} = yield select(state => ({
          replyItems: state.topicDetail.replyItems
        })
      );
      if (replyItems && replyItems.length > 0) {
        replyItems[index].showReplyBox = !replyItems[index].showReplyBox;
      }
      yield put({
        type: 'changeState',
        payload: {key: 'replyItems', value: replyItems}
      });
    },

    * submitReply({payload}, {call}) {
      const {submitData, cb} = payload;
      const result = yield call(services.PostReply, submitData);
      if (result.data.success) {
        cb && cb();
      }
    }
  },
};
