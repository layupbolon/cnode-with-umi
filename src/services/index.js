import { get, post } from '../utils/request';
import { randomData } from '../utils';

const base_url = 'https://cnodejs.org/api/v1';

export function GetTopics(setting) {
    const defaultSetting = {
        pageIndex: 1,
        pageSize: 10,
        tab: 'all'
    };
    let newSetting = Object.assign(defaultSetting, setting);

    let url = `${base_url}/topics?`;
    if (newSetting.pageIndex) {
        url += 'page=' + newSetting.pageIndex;
    }
    if (newSetting.tab) {
        url += '&tab=' + newSetting.tab;
    }
    else {
        url += '&tab=all';
    }
    if (newSetting.pageSize) {
        url += '&limit=' + newSetting.pageSize;
    }
    url += '&mdrender=false&' + randomData();

    return get(url);
}

export function GetTopicDetail(id, accesstoken) {
    let url = `${base_url}/topic/${id}?${randomData()}`;
    if (accesstoken) {
        url += `&mdrender=true&accesstoken=${accesstoken}`;
    }
    return get(url);
}

export function GetUserData(userName) {
    const url = `${base_url}/user/${userName}?${randomData()}`;
    return get(url);
}

export function Login(accesstoken) {
    const url = `${base_url}/accesstoken`;
    return post(url, { accesstoken });
}

export function Publish(data) {
    const url = `${base_url}/topics`;
    return post(url, data);
}

export function replyUp(reply_id, accesstoken) {
    const url = `${base_url}/reply/${reply_id}/ups`;
    return post(url, { accesstoken });
}

export function PostReply(data) {
    const { topic_id, ...rest } = data;
    const url = `${base_url}/topic/${topic_id}/replies`;
    return post(url, rest);
}

export function GetMsg(accesstoken) {
    const url = `${base_url}/messages?accesstoken=${accesstoken}`;
    return get(url);
}
