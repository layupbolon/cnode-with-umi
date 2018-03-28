import React from 'react';
import Link from 'umi/link';

import {Icon, UserImage} from '../../../../components';
import {dataFormat} from '../../../../utils';
import styles from './index.css';

function ListItem(rowData) {
  return (
    <Link to={`/topicDetail/${rowData.id}`}>
      <div className={styles.listitem_wrap}>
        <div className={styles.listitem_up}>
          <Icon
            iconType={rowData.top ? "top" : rowData.good ? "good" : rowData.tab}
            iconClassName="icon"/>
          <h4 className={styles.listitem_up_h4}>{rowData.title}</h4>
        </div>
        <div className={styles.listitem_down}>
          <div className={styles.left}>
            <UserImage imageUrl={rowData.author.avatar_url}/>
            <div className={styles.autherInfo}>
              <p>{rowData.author.loginname}</p>
              <p>{dataFormat(rowData.create_at)}</p>
            </div>
          </div>
          <div className={styles.right}>
            <p>{rowData.reply_count}/{rowData.visit_count}</p>
            <p>{dataFormat(rowData.last_reply_at)}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ListItem;
