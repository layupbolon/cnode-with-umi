import React from 'react';
import {connect} from 'dva';

import {Nav, UserInfo,Footer} from '../../components';

class Me extends React.PureComponent {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('User'));
    const {dispatch} = this.props;
    dispatch({type: 'user/getUserData', payload: {userName: user.loginname}});
  }

  render() {
    return (
      <div>
        <Nav title={'个人中心'} showBackIcon={false}></Nav>
        <UserInfo userData={this.props.userData}></UserInfo>
        <Footer selectedIndex={3}></Footer>
      </div>
    )
  }
}

function mapStateToProps({user}) {
  return {userData: user.userData};
}

export default connect(mapStateToProps)(Me);
