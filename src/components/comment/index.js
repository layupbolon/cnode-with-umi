import React from 'react';
import {connect} from 'dva';
import router from 'umi/router';

import styles from './index.css';
import {getUserInfo} from '../../utils';

class Comment extends React.PureComponent {
  state = {
    content: ''
  };

  render() {
    const {content} = this.state;
    const {dispatch, topic_id, reply_id, commetTo} = this.props;
    const userInfo = getUserInfo();

    return (
      <div className={styles.comment}>
        <div className={styles.input}>
        <textarea
          placeholder={commetTo ? `@${commetTo}` : "回复支持Markdown语法,请注意标记代码"}
          defaultValue={content}
          onInput={(e) => {
            this.setState({content: e.target.value});
          }}
        />
        </div>
        <div className={styles.btnWrap}>
          <button className={styles.btn} onClick={() => {
            let submitData = {
              topic_id,
              accesstoken: userInfo.accesstoken,
              content: content
            };
            if (reply_id) {
              submitData.reply_id = reply_id;
              submitData.content = `[@${commetTo}](/user/${commetTo}) ${content}`;
            }
            submitData.content += '\n\rFrom [cnode-with-umi](https://github.com/layupbolon/cnode-with-umi)';
            dispatch({
              type: 'topicDetail/submitReply', payload: {
                submitData,cb:()=>{
                  router.go(0)
                }}
            })
          }}>回复
          </button>
        </div>
      </div>
    )
  }
}

export default connect()(Comment);
