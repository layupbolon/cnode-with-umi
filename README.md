# cnode-with-umi
基于umi + dva + antd-mobile 的CNode社区 webapp

[**点我预览**](https://layupbolon.github.io/cnode-with-umi/)

### 扫码预览
![image](https://ws3.sinaimg.cn/large/006tNc79gy1fpz8jyv4q0j307s07sq2p.jpg)

### 下载

```
git clone https://github.com/layupbolon/cnode-with-umi.git
cd cnode-with-umi
npm install
```

### 运行&发布

```
npm run start

npm run build
```

### 代码结构

```
├── mock
├── public
└── src
    ├── Iconfont
    ├── assets
    ├── components
    │   ├── comment
    │   ├── icon
    │   ├── list
    │   ├── loading
    │   ├── nav
    │   ├── tabs
    │   ├── userImage
    │   └── userInfo
    ├── layouts
    ├── models
    ├── pages
    │   ├── login
    │   │   └── models
    │   ├── me
    │   ├── msg
    │   │   └── models
    │   ├── publish
    │   │   └── models
    │   ├── topicDetail
    │   │   └── models
    │   ├── topicList
    │   │   ├── components
    │   │   │   ├── head
    │   │   │   ├── list
    │   │   │   └── listItem
    │   │   └── models
    │   └── user
    │       └── models
    ├── services
    └── utils
```


### 功能
- [x] 登录登出
- [x] 列表分页，查看帖子
- [x] 发帖、点赞、回复
- [x] 我的消息
- [x] 个人中心
- [x] 查看其它用户的资料
- [ ] 消息提示（已读未读）
> 所有API由[cnode](https://cnodejs.org/api)提供

### 更新日志
#### 2018-9-18
- 将umi的版本升级到2.0.3

### 总结
###### 本项目中使用[umi@2](https://umijs.org/)[工具 + 路由] + [dva@2.4](https://github.com/dvajs/dva)[数据] + [antd-mobile](https://mobile.ant.design/index-cn)[视图]。全是阿里出品，你值得拥有👍

##### umi是什么？
umi是一个开发框架，目前包含工具+路由，也就是 ***webpack + webpack-dev-server + babel + postcss + ... + react-router***，其中让我觉得最亮眼的就是文件结构即路由，很赞！  
按照官方的说法，umi主要有以下优势：
- PWA Support
- Tree Shake
- antd(-mobile) 启用 ES Module
- Scope Hoist
- 公共文件的智能提取
- 页面级的按需加载
- Inline Critical CSS
- 提供 umi/dynamic 和 import() 语法，分别用于懒加载组件和模块
- 优化的 babel-preset-umi
- 静态化的 SSR 处理
- link rel=preload
- hash 构建及服务端支持（云凤蝶）
- 通过 react-constant-elements 和 react-inline-elements 提升 rerender 性能
- 一键切换到 preact
- Progressive image loading
- 按需打包 umi 内置的路由代码
- ...

优化点很多，有些关乎尺寸，有些关乎执行效率，有些关乎首屏时间，有些关乎用户体验。

> umi已经发布2.0版本，如何迁移1.X版本，请看[这里](https://umijs.org/zh/guide/migration.html)。

##### dva是什么？
dva@1.0是一个封装有redux、redux-saga、react-router的框架。
从dva@2.0开始，剥离了路由，成为一个纯数据框架，简单的说就是dva@2.0适用于多端，web、app甚至小程序都能使用dva@2.0。  
> 为什么使用dva和如何使用dva，详见[这里](https://github.com/dvajs/dva/issues/1)和[这里](https://github.com/dvajs/dva-knowledgemap)。

##### ant-mobile是什么？
ant-mobile是一个UI框架。
###### 特性和优势
- UI 样式高度可配置，拓展性更强，轻松适应各类产品风格
- 基于 React Native 的 iOS / Android / Web 多平台支持，组件丰富、能全面覆盖各类场景
- 提供 "组件按需加载" / "Web 页面高清显示" / "SVG Icon" 等优化方案，一体式开发
- 使用 TypeScript 开发，提供类型定义文件，支持类型及属性智能提示，方便业务开发
- 全面兼容 react / preact
###### 适用场景
- 适合于中大型产品应用
- 适合于基于 react / preact / react-native 的多终端应用
- 适合不同 UI 风格的高度定制需求的应用
