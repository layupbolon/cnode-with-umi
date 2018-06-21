import React from 'react';
import 'github-markdown-css';
import 'normalize.css';
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
