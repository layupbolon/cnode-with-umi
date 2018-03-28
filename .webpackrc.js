export default {
  "publicPath": "/static/",
  "proxy": {
    "/api": {
      "target": "https://cnodejs.org/api/v1",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
}
