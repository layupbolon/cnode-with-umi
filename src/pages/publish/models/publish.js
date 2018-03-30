import * as services from '../../../services';

export default {

  namespace: 'publish',

  state: {},

  reducers: {},

  effects: {
    * publish({payload}, {call}) {
      const {cb, ...rest} = payload;
      const result = yield call(services.Publish, rest);
      if (result.data && result.data.success) {
        cb && cb(true, '发表成功');
      } else {
        cb && cb(false, '发表失败，请重试');
      }
    },
  },
};
