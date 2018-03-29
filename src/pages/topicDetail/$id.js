import React from 'react';
import {connect} from 'dva';
import Link from 'umi/link';

import {Icon, UserImage, Nav} from '../../components';
import {dataFormat} from '../../utils';
import styles from './topicDetail.css';

function TopicDetail({dataSource}) {
  if (!dataSource || dataSource.length < 1)
    return null;

  return (
    <div>
      <Nav title={'详 情'}/>
      <div className={styles.topicDetail}>
        <div className={styles.topicTopInfo}>
          <div className={styles.topicTopInfoDetail}>
            <div className={styles.userImage}>
              <UserImage imageUrl={dataSource.author.avatar_url}/>
            </div>
            <div className={styles.authorInfo}>
              <p className={styles.authorInfo_p} style={{paddingTop: '15px'}}>
                <Link to={`/user/${dataSource.author.loginname}`}
                      style={{color: '#80BD01'}}>{dataSource.author.loginname}</Link>&nbsp;&nbsp;
                <span>{dataFormat(dataSource.create_at)}</span>
              </p>
              <p className={styles.authorInfo_p} style={{paddingBottom: '8px'}}>
                阅读：{dataSource.visit_count} 回复：{dataSource.reply_count}
              </p>
            </div>
          </div>
          <div className={styles.logo}>
            <Icon
              iconType={dataSource.top ? "top" : dataSource.good ? "good" : dataSource.tab}
              iconClassName="logo"
              fontSize={35}/>
          </div>
        </div>
        <div className={styles.topicTitle}> {dataSource.title}</div>
        <div className="content markdown-body"
             dangerouslySetInnerHTML={{__html: dataSource.content}}/>
        <div className={styles.topicReply}>共<span>{dataSource.reply_count}</span>条回复</div>
        <ul>
          {
            dataSource.replies.map((item, index) => {
              return (
                <li key={index}>
                  <div className={styles.replyTop}>

                    <div className={styles.replyAuthorImage}>
                      <UserImage style={{margin: '10px'}} imageUrl={item.author.avatar_url}/>
                    </div>

                    <div className={styles.replyInfo}>
                      <div>
                        <div className={styles.replyInfo_left}>
                          <span>{item.author.loginname}</span> {dataFormat(item.create_at)}
                        </div>
                        <div className={styles.replyInfo_floor}>#{index + 1}</div>
                      </div>
                      <div className="replyContent content markdown-body"
                           dangerouslySetInnerHTML={{__html: item.content}}/>
                    </div>

                  </div>
                  <div className={styles.replyDown}>
                    <div className={styles.replyDownDetail}>
                      <div>
                        <i className="iconfont icon-dianzan" style={{color: 'black'}}/>
                        <em style={{fontStyle: 'normal'}}>{item.ups.length ? item.ups.length : ''}</em>
                      </div>
                      <i className="iconfont icon-huifu" style={{color: 'black'}}/>
                    </div>

                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

function mapStateToProps({topicDetail}) {
  return {dataSource: topicDetail.dataSource};
}

export default connect(mapStateToProps)(TopicDetail);
