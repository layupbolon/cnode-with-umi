import React from 'react';
import { List } from 'antd-mobile';
import router from 'umi/router';

import { dataFormat } from '../../utils/index';

const Item = List.Item;

function ListView({ data }) {
    if (!data || data.length < 1) return null;
    return (
        <List>
            {data.map((item, index) => {
                return (
                    <Item key={`${item.id}-${index}`}
                        extra={dataFormat(item.last_reply_at)}
                        onClick={() => router.push(`/topicDetail/${item.id}`)}
                    >
                        {item.title}
                    </Item>
                );
            })}
        </List>
    );
}

export default ListView;
