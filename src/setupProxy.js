const { createProxyMiddleware } = require('http-proxy-middleware');
     
module.exports = function(app) {
    app.use(createProxyMiddleware('/api/**', { target: 'http://localhost:5050' }));
    app.use(createProxyMiddleware('/otherApi/**', { target: 'http://localhost:5050' }));
};