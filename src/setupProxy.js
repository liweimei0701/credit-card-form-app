const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy.createProxyMiddleware('/api', {
        target: "https://rq1twnw4zf.execute-api.ap-southeast-2.amazonaws.com/items",
        pathRewrite: {'^/api': ''},
        changeOrigin: true
    }));
};