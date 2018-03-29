import React from 'react';
import {connect} from 'dva';
import {Toast} from 'antd-mobile';

import {Nav} from '../../components';
import styles from './login.css';

class Login extends React.PureComponent {
  render() {
    const {dispatch} = this.props;

    return (
      <div>
        <Nav title={'登录'}></Nav>
        <div className={styles.login}>
          <input className={styles.input} ref="accesstoken" type="text" placeholder="Access Token"></input>
          <button className={styles.btn} onClick={() => {
            dispatch({
              type: 'login/login', payload: {
                accesstoken: this.refs.accesstoken.value,
                cb: (isSuccess, msg) => {
                  isSuccess ? Toast.success(msg, 1) : Toast.fail(msg, 1);
                }
              }
            })
          }}>登录
          </button>
        </div>
      </div>
    )
  }
}

export default connect()(Login);
