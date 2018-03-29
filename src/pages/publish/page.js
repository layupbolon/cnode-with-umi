import React from 'react';
import {connect} from 'dva';

import styles from './publish.css';
import {Nav,Footer} from '../../components';

function Publish({dispatch}) {
  return (
    <div>
      <Nav title={'发表主题'} showBackIcon={false} showPublishIcon={true} publishFun={() => {
        //to do sth publish
      }}></Nav>
      <div className={styles.publish}>
        <div className={styles.item}>
          <select name="tab">
            <option value>请选择发表类型</option>
            <option value="share">分享</option>
            <option value="ask">问答</option>
            <option value="job">招聘</option>
            <option value="dev">测试</option>
          </select>
        </div>
        <div className={styles.item}>
          <input className={styles.input} type="text" placeholder="标题字数 10 字以上"/>
        </div>
        <div className={styles.item}>
          <textarea className={styles.textarea} placeholder="内容字数 30 字以上"></textarea>
        </div>
      </div>
      <Footer selectedIndex={1}></Footer>
    </div>
  )
}

export default connect()(Publish);
