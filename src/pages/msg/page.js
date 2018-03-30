import React from 'react';

import {Nav, Footer} from '../../components';
import styles from './msg.css';

function Msg() {
  if (!localStorage.getItem('User')) {
    return (
      <div>
        <Nav title={'消息'} showBackIcon={false}></Nav>
        <div className={styles.notLogin}>
          您还未登录，请先<a className={styles.loginText} href={'/login'}>登录</a>
        </div>
        <Footer selectedIndex={2}></Footer>
      </div>
    )
  }

  return (
    <div>
      <Nav title={'消息'} showBackIcon={false}></Nav>

      <Footer selectedIndex={2}></Footer>
    </div>
  )
}

export default Msg;
