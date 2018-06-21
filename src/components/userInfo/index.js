import React from 'react';
import { Tabs } from 'antd-mobile';

import { UserImage, List } from '../../components';
import { dataFormat } from '../../utils';
import styles from './index.css';

const tabs = [
    { title: '主题' },
    { title: '回复' }
];

function UserInfo({ userData }) {
    if (!userData) return null;

    return (
        <div className={styles.wrap}>
            <div className={styles.up}>
                <div className={styles.up_wrap}>
                    <UserImage imageUrl={userData.avatar_url} width={80} height={80} />
                    <span className={styles.userName}>{userData.loginname}</span>
                    <div className={styles.userInfo}>
                        <span>{`积分：${userData.score}`}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>{`注册于：${dataFormat(userData.create_at)}`}</span>
                    </div>
                </div>
            </div>
            <div>
                <Tabs tabs={tabs}
                    initialPage={0}
                >
                    <List data={userData.recent_topics}></List>
                    <List data={userData.recent_replies}></List>
                </Tabs>
            </div>
        </div>
    );
}

export default UserInfo;
