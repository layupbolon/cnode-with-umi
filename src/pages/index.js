import React from 'react';
import router from 'umi/router';

class Index extends React.PureComponent {
    componentDidMount() {
        router.replace('/topicList');
    }
    render() {
        return null;
    }
}

export default Index;
