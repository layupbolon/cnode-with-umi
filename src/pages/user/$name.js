import React from 'react';
import {connect} from 'dva';

import {Nav, UserInfo} from '../../components';

function User({userData}) {

  return (
    <div>
      <Nav title={`${userData.loginname}的个人中心`}/>
      <UserInfo userData={userData}></UserInfo>
    </div>
  )
}

function mapStateToProp({user}) {
  return {userData: user.userData};
}

export default connect(mapStateToProp)(User);
