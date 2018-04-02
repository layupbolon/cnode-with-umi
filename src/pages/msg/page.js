import React from 'react';
import {connect} from 'dva';
import Link from 'umi/link';

import {Nav, Footer, UserImage} from '../../components';
import {dataFormat} from "../../utils";
import styles from './msg.css';

class Msg extends React.PureComponent {
  componentDidMount() {
    const storageResult = localStorage.getItem('User');
    if (storageResult) {
      const userInfo = JSON.parse(storageResult);

      const {dispatch} = this.props;
      dispatch({type: 'msg/GetMsg', payload: {accesstoken: userInfo.accesstoken}});
    }
  }

  render() {
    if (!localStorage.getItem('User')) {
      return (
        <div>
          <Nav title={'消息'} showBackIcon={false}/>
          <div className={styles.notLogin}>
            您还未登录，请先<a className={styles.loginText} href={'/login'}>登录</a>
          </div>
          <Footer selectedIndex={2}/>
        </div>
      )
    }

    let {has_read_messages, hasnot_read_messages} = this.props;
    if ((!has_read_messages && !hasnot_read_messages)
      || (has_read_messages.length < 1 && hasnot_read_messages.length < 1)) return null;

    Array.prototype.push.apply(hasnot_read_messages, has_read_messages);

    return (
      <div>
        <Nav title={'消息'} showBackIcon={false}/>
        <div style={{marginTop: '7vh'}}>
          {
            hasnot_read_messages.map((item, index) => {
              let content = null;
              if (item.type === 'at') {
                content = <div>在话题 <Link to={`/topicDetail/${item.topic.id}`}
                                         style={{color: '#108ee9'}}>{item.topic.title}</Link> 中 @了你</div>;
              } else {
                content = <div>回复你了的话题 <Link to={`/topicDetail/${item.topic.id}`}
                                             style={{color: '#108ee9'}}>{item.topic.title}</Link></div>
              }

              return (
                <div key={index} className={styles.msgItemWrap}>
                  <div className={styles.msgItemUserImage}>
                    <UserImage imageUrl={item.author.avatar_url}/>
                  </div>
                  <div className={styles.msgItemRight}>
                    <div className={styles.msgItemUp}>
                      <span className={styles.msgItemUserName}>{item.author.loginname}</span>
                      <span className={styles.msgItemDate}>{dataFormat(item.create_at)}</span>
                    </div>
                    <div>
                      {content}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <Footer selectedIndex={2}/>
      </div>
    )
  }
}

function mapStateToProps({msg}) {
  return {
    has_read_messages: msg.has_read_messages,
    hasnot_read_messages: msg.hasnot_read_messages,
  }
}

export default connect(mapStateToProps)(Msg);
