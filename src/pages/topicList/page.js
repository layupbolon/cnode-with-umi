import React from 'react';
import { connect } from 'dva';

import './index.css';
import { Head, List } from './components';
import { Footer } from '../../components';

function IndexPage() {
    return (
        <div>
            <Head />
            <List />
            <Footer selectedIndex={0} />
        </div>
    );
}

export default connect()(IndexPage);
