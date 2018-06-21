module.exports = {
  extends: [
    'eslint-config-alloy/react',
  ],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // React: false,
    // ReactDOM: false
  },
  rules: {
    // 这里填入你的项目需要的个性化配置
    'react/no-typos':0,
    'react/no-find-dom-node':0,
    'no-return-assign':0,
  }
};
