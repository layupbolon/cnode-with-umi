import React from 'react';
import {connect} from 'dva';

import './index.css';
import {Head, List} from './components';
import {Footer} from '../../components';

function IndexPage() {
  return (
    <div>
      <Head></Head>
      <List></List>
      <Footer selectedIndex={0}></Footer>
    </div>
  );
}

export default connect()(IndexPage);
