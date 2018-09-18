import React, { Fragment } from 'react';
import { connect } from 'dva';

import { Nav, UserInfo } from '../../components';

function User({ userData }) {

    return (
        <Fragment>
            <Nav title={`${userData.loginname}的个人中心`} />
            <UserInfo userData={userData}></UserInfo>
        </Fragment>
    );
}

function mapStateToProp({ user }) {
    return { userData: user.userData };
}

export default connect(mapStateToProp)(User);
