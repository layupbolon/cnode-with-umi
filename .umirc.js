export default {
  plugins: [
    ['umi-plugin-dva', { immer: true }],
    ["umi-plugin-polyfill"],
    ['umi-plugin-routes', {
      exclude: [
        /components/,
        /models/,
        /services/,
      ],
    }],
  ],
  // pages: {
  //   "/": {
  //     Route: "./src/components/Authorized/AuthorizedRoute.js",
  //     ignore: "/User"
  //   }
  // },
  hashHistory: true
};
