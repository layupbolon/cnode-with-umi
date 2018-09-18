import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { Modal } from 'antd-mobile';

import { Nav, UserInfo, Footer } from '../../components';

const Alert = Modal.alert;

class Me extends React.PureComponent {
    constructor(props) {
        super(props);

        const storageResult = localStorage.getItem('User');
        if (!storageResult) {
            router.replace('/login');
            return;
        }
    }

    componentDidMount() {
        const storageResult = localStorage.getItem('User');
        if (!storageResult) {
            router.replace('/login');
            return;
        }

        const user = JSON.parse(storageResult);
        if (user) {
            const { dispatch } = this.props;
            dispatch({ type: 'user/getUserData', payload: { userName: user.loginname }});
        }
    }

    render() {
        const { dispatch, userData } = this.props;

        if (!userData || !userData.loginname) return null;

        return (
            <div>
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
            </div>
        );
    }
}

function mapStateToProps({ user }) {
    return { userData: user.userData || {}};
}

export default connect(mapStateToProps)(Me);
