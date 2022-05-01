module.exports = {
  devServer: {
    proxy: {
      '^/dev2test': {
        target: 'https://api.test.cn', // 测试
        changeOrigin: true,
        pathRewrite: {
          '^/dev2test': '/specific-test',
        },
      },
      '/dev2production': {
        target: 'https://api.prod.cn', // 生产
        changeOrigin: true,
        pathRewrite: {
          '^/dev2production': '/',
        },
      },
    },
  },
};
