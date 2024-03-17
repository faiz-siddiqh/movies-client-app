const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://2f2a-122-171-23-14.ngrok-free.app',
      changeOrigin: true,
    })
  );
};
