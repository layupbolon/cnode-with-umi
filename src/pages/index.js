import React from 'react';
import 'github-markdown-css';
import 'normalize.css';
import router from 'umi/router';

class Index extends React.PureComponent{
  render(){
    return null;
  }
  componentDidMount(){
    router.replace('/topicList');
  }
}

export default Index;
