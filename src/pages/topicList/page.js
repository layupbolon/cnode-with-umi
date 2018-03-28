import React from 'react';
import {connect} from 'dva';

import './index.css';
import {Head, List} from './components';

function IndexPage() {
  return (
    <div>
      <Head></Head>
      <List></List>
    </div>
  );
}

export default connect()(IndexPage);
