/* eslint-disable react/no-string-refs */
import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { Toast } from 'antd-mobile';

import { Nav } from '../../components';
import styles from './login.css';

class Login extends React.PureComponent {
    render() {
        const { dispatch } = this.props;

        return (
            <div>
                <Nav title={'登录'} />
                <div className={styles.login}>
                    <input className={styles.input} ref="accesstoken" type="text" placeholder="Access Token" />
                    <button className={styles.btn} onClick={() => {
                        dispatch({
                            type: 'login/login', payload: {
                                accesstoken: this.refs.accesstoken.value,
                                cb: (isSuccess, msg) => {
                                    if (isSuccess) {
                                        Toast.success(msg, 1);
                                        router.replace('/me');
                                    } else {
                                        Toast.fail(msg, 1);
                                    }
                                }
                            }
                        });
                    }}>登录
                    </button>
                </div>
            </div>
        );
    }
}

export default connect()(Login);
