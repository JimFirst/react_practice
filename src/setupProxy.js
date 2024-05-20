const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  // app.use(
  //   createProxyMiddleware('/server', {
  //     target: 'https://www.baidu.com',
  //     changeOrigin: true,
  //     ws: true,
  //     debuger: true,
  //     pathRewrite: { '^/server': '/' },
  //   }),
  // )
}
