import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { ListView } from 'antd-mobile';

import { ListItem } from '../../components';

class List extends React.PureComponent {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        const dataSource = ds.cloneWithRows(this.props.dataSource);

        this.state = {
            dataSource,
            isLoading: true,
            height: document.documentElement.clientHeight * 3 / 4,
        };
    }

    componentDidMount() {
        const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;

        setTimeout(() => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.props.dataSource),
                isLoading: false,
                height: hei,
            });
        }, 600);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.dataSource !== this.props.dataSource) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
            });
        }
    }

  onEndReached = (event) => {
      if (this.state.isLoading) {
          return;
      }
      this.setState({ isLoading: true });
      setTimeout(() => {
          this.props.dispatch({ type: 'topicList/getNextPageTopicData' });
          this.setState({ isLoading: false });
      }, 300);
  };

  render() {
      const separator = (sectionID, rowID) => (
          <div
              key={`${sectionID}-${rowID}`}
              style={{
                  backgroundColor: '#F5F5F9',
                  height: 3,
                  borderTop: '1px solid #ECECED',
                  borderBottom: '1px solid #ECECED',
              }}
          />
      );

      return (
          <ListView
              ref={el => this.lv = el}
              dataSource={this.state.dataSource}
              renderRow={ListItem}
              renderSeparator={separator}
              pageSize={10}
              onScroll={() => {
                  // console.log('scroll');
              }}
              style={{ marginTop: '7vh', marginBottom: '8vh' }}
              useBodyScroll
              className="am-list"
              scrollRenderAheadDistance={300}
              onEndReached={this.onEndReached}
              onEndReachedThreshold={10}
          />
      );
  }
}

function mapStateToProps(state) {
    const { topicDatasource } = state.topicList;
    return {
        dataSource: topicDatasource
    };
}

export default connect(mapStateToProps)(List);
