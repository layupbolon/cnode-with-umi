import React from 'react';
import Link from 'umi/link';

import styles from './index.css';

function styleHandler(selectedIndex, current) {
  return selectedIndex === current ? {background: '#429EE9'} : {};
}

function Footer({selectedIndex}) {
  return (
    <footer className={styles.tabs}>
      <Link to={'/topicList'}
            className={styles.tabsItem}
            style={styleHandler(selectedIndex, 0)}
      >
        <i className={"iconfont icon-shouye"} style={{width: '15px', height: '15px'}}></i>
        <span>首页</span>
      </Link>
      <Link to={'/publish'}
            className={styles.tabsItem}
            style={styleHandler(selectedIndex, 1)}
      >
        <i className={"iconfont icon-fabu"} style={{width: '15px', height: '15px'}}></i>
        <span>发表</span>
      </Link>
      <Link to={'/msg'}
            className={styles.tabsItem}
            style={styleHandler(selectedIndex, 2)}
      >
        <i className={"iconfont icon-xiaoxi"} style={{width: '15px', height: '15px'}}></i>
        <span>消息</span>
      </Link>
      <Link to={'/me'}
            className={styles.tabsItem}
            style={styleHandler(selectedIndex, 3)}
      >
        <i className={"iconfont icon-wode"} style={{width: '15px', height: '15px'}}></i>
        <span>我的</span>
      </Link>
    </footer>
  )
}

export default Footer;
