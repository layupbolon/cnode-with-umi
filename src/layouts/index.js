import React from 'react';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';

import { Loading } from '../components';

function Layout({ children, isLoading }) {
    return (
        <div>
            <Loading isLoading={isLoading} />
            {children}
        </div>
    );
}

function mapStateToProp(state) {
    const { global } = state.loading;
    return {
        isLoading: global
    };
}

export default withRouter(connect(mapStateToProp)(Layout));
