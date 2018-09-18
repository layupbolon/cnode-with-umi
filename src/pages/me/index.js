import React, { Fragment } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { Modal } from 'antd-mobile';

import { Nav, UserInfo, Footer } from '../../components';
import styles from '../msg/msg.css';

const Alert = Modal.alert;

class Me extends React.PureComponent {
    componentDidMount() {
        const storageResult = localStorage.getItem('User');
        if (storageResult) {
            const user = JSON.parse(storageResult);
            if (user) {
                const { dispatch } = this.props;
                dispatch({ type: 'user/getUserData', payload: { userName: user.loginname }});
            }
        }
    }

    render() {

        if (!localStorage.getItem('User')) {
            return (
                <div>
                    <Nav title={'消息'} showBackIcon={false} />
                    <div className={styles.notLogin}>
              您还未登录，请先<a className={styles.loginText} href={'/login'}>登录</a>
                    </div>
                    <Footer selectedIndex={3} />
                </div>
            );
        }

        const { dispatch, userData } = this.props;

        return (
            <Fragment>
                <Nav title={'个人中心'} showBackIcon={false} showSignOutIcon={true} rightIconFunc={() => {
                    Alert('退出', '确定退出登录？', [
                        { text: '取消', onPress: () => console.log('cancel') },
                        {
                            text: '确定', onPress: () => dispatch({
                                type: 'login/logout', payload: {
                                    cb: () => {
                                        router.replace('/topicList');
                                    }
                                }
                            })
                        },
                    ]);
                }}
                />
                <UserInfo userData={userData} />
                <Footer selectedIndex={3} />
            </Fragment>
        );
    }
}

function mapStateToProps({ user }) {
    return { userData: user.userData || {}};
}

export default connect(mapStateToProps)(Me);
