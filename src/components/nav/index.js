import React from 'react';
import router from 'umi/router';

import styles from './index.css';

function Nav({
    title,
    showBackIcon = true,
    showSignOutIcon = false,
    showPublishIcon = false,
    rightIconFunc = () => {}
}) {
    return (
        <header className={styles.nav}>
            {
                showBackIcon ? (
                    <div className={styles.navBack}>
                        <a onClick={() => router.goBack()}>
                            <i className="iconfont icon-fanhui" style={{ fontSize: '23px' }}></i>
                        </a>
                    </div>
                ) : (<div className={styles.navBack} style={{ width: '36px' }}></div>)
            }
            <h2 className={styles.nav_h2}>{title}</h2>
            {
                showSignOutIcon ? (
                    <div className={styles.navSign}>
                        <a onClick={() => rightIconFunc()}>
                            <i className="iconfont icon-tuichu" style={{ fontSize: '23px' }}></i>
                        </a>
                    </div>
                ) : showPublishIcon ? (
                    <div className={styles.navPublish}>
                        <a onClick={() => {
                            rightIconFunc();
                        }}>
                            <i className="iconfont icon-fabu" style={{ fontSize: '23px' }}></i>
                        </a>
                    </div>) :
                    (<div className={styles.navSign} style={{ width: '36px' }}></div>)
            }
        </header>
    );
}

export default Nav;
