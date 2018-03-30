import React from 'react';
import {connect} from 'dva';
import {Toast} from 'antd-mobile';

import styles from './publish.css';
import {Nav, Footer} from '../../components';

class Publish extends React.PureComponent {
  state = {
    tab: '',
    title: '',
    content: '',
  };

  render() {
    const storageResult = localStorage.getItem('User');
    if (!localStorage.getItem('User')) {
      return (
        <div>
          <Nav title={'发表主题'} showBackIcon={false}/>
          <div className={styles.notLogin}>
            您还未登录，请先<a className={styles.loginText} href={'/login'}>登录</a>
          </div>
          <Footer selectedIndex={1}/>
        </div>
      )
    }

    const {dispatch} = this.props;
    const userInfo = JSON.parse(storageResult);
    const {tab, title, content} = this.state;

    return (
      <div>
        <Nav title={'发表主题'} showBackIcon={false} showPublishIcon={true} rightIconFunc={() => {
          dispatch({
            type: 'publish/publish', payload: {
              accesstoken: userInfo.accesstoken,
              title,
              tab,
              content,

              cb: (isSuccess, msg) => {
                isSuccess ? Toast.success(msg, 1) : Toast.fail(msg, 1);
              }
            }
          })
        }}/>
        <div className={styles.publish}>
          <div className={styles.item}>
            <select name="tab"
                    defaultValue={this.state.tab}
                    onInput={(e) => {
                      this.setState({tab: e.target.value});
                    }}>
              <option value>请选择发表类型</option>
              <option value="share">分享</option>
              <option value="ask">问答</option>
              <option value="job">招聘</option>
              <option value="dev">测试</option>
            </select>
          </div>
          <div className={styles.item}>
            <input className={styles.input}
                   type="text"
                   placeholder="标题字数 10 字以上"
                   defaultValue={this.state.title}
                   onInput={(e) => {
                     this.setState({title: e.target.value});
                   }}/>
          </div>
          <div className={styles.item}>
            <textarea className={styles.textarea}
                      placeholder="内容字数 30 字以上"
                      defaultValue={this.state.content}
                      onInput={(e) => {
                        this.setState({content: e.target.value});
                      }}/>
          </div>
        </div>
        <Footer selectedIndex={1}></Footer>
      </div>
    )
  }
}

export default connect()(Publish);
