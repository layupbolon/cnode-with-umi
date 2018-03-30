import React from 'react';
import {connect} from 'dva';
import {SegmentedControl} from 'antd-mobile';

import styles from './index.css';

function mapTabNameToCode(tab) {
  switch (tab) {
    case '全部':
      return 'all';
    case '精华':
      return 'good';
    case '分享':
      return 'share';
    case '问答':
      return 'ask';
    case '招聘':
      return 'job';
    case '测试':
      return 'dev';
    default:
      return 'all';
  }
}

function Head({dispatch, selectedIndex}) {
  return (
    <SegmentedControl
      selectedIndex={selectedIndex}
      className={styles.head}
      values={['全部', '精华', '分享', '问答', '招聘', '测试']}
      onChange={(e) => {
        dispatch({type: 'topicList/initState'});
        dispatch({
          type: 'topicList/changeState',
          payload: {key: 'headSelectedIndex', value: e.nativeEvent.selectedSegmentIndex}
        });
        const tabValueCode = mapTabNameToCode(e.nativeEvent.value);
        dispatch({type: 'topicList/tabChange', payload: {tab: tabValueCode}});
      }}
    />
  )
}

function mapStateToProp(state) {
  const {headSelectedIndex} = state.topicList;
  return {selectedIndex: headSelectedIndex};
}

export default connect(mapStateToProp)(Head);
