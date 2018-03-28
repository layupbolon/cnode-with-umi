export const dataFormat = (str) => {
  let date = new Date(str);
  let time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if (time < 0) {
    return '';
  } else if (time / 1000 < 60) {
    return '刚刚';
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000).toString(), 0) + '分钟前';
  } else if ((time / 3600000) < 24) {
    return parseInt((time / 3600000).toString(), 0) + '小时前';
  } else if ((time / 86400000) < 31) {
    return parseInt((time / 86400000).toString(), 0) + '天前';
  } else if ((time / 2592000000) < 12) {
    return parseInt((time / 2592000000).toString(), 0) + '月前';
  } else {
    return parseInt((time / 31536000000).toString(), 0) + '年前';
  }
};

export const randomData = () => {
  return Math.random().toString(36).substr(2);
};
