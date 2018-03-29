import request from '../utils/request';
import {randomData} from '../utils';

export function GetTopics(setting) {
  const defaultSetting = {
    pageIndex: 1,
    pageSize: 10,
    tab: 'all'
  };
  let newSetting = Object.assign(defaultSetting, setting);

  let url = '/api/topics?';
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

  return request(url);
}

export function GetTopicDetail(id) {
  const url = `/api/topic/${id}?${randomData()}`;
  return request(url);
}

export function GetUserData(userName) {
  const url = `/api/user/${userName}?${randomData()}`;
  return request(url);
}

export function Login(accesstoken) {
  const url = '/api/accesstoken';
  return request(url, {
    method: 'POST',
    body: JSON.stringify({accesstoken}),
    headers: {
      "Content-Type": "application/json"
    },
  });
}
