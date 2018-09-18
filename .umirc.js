export default {
  plugins: [
    ['umi-plugin-react', {
      dva: {
        immer: true,
      },
      antd: true,
      routes: {
        exclude: [/models\//],
      },
      polyfills: ['ie9'],
      locale: {},
      library: 'react',
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/loading/index.js',
      },
      dll: {
        exclude: [],
      },
      hardSource: true,
      pwa: false,
      hd: false,
      fastClick: true,
      title: 'default title',
    }],
  ],
  base:'/cnode-with-umi/',
  publicPath:'/cnode-with-umi/',
};
