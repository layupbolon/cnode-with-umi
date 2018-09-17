import React, { Fragment } from 'react';
import { connect } from 'dva';

import './index.css';
import { Head, List } from './components';
import { Footer } from '../../components';

function IndexPage() {
    return (
        <Fragment>
            <Head />
            <List />
            <Footer selectedIndex={0} />
        </Fragment>
    );
}

export default connect()(IndexPage);
