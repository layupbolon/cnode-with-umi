import React from 'react';
import router from 'umi/router';

import styles from './index.css';

function Nav({title}) {
  return(
    <header className={styles.nav}>
      <div className={styles.navBack}>
        <a onClick={()=>router.goBack()}>
          <i className="iconfont icon-fanhui"></i>
        </a>
      </div>
      <h2 className={styles.nav_h2}>{title}</h2>
    </header>
  )
}

export default Nav;
