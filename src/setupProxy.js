// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
// 	app.use(
// 		"/api",
// 		createProxyMiddleware({
// 			target: "https://course-api.com",
// 			changeOrigin: true,
// 			pathRewrite: {
// 				"^/api": "",
// 			},
// 		}),
// 	);
// };

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		"/api",
		createProxyMiddleware({
			target: "https://course-api.com",
			changeOrigin: true,
			pathRewrite: {
				"^/api": "",
			},

			onProxyRes: function (proxyRes, req, res) {
				proxyRes.headers["Access-Control-Allow-Origin"] = "*"; // Example of adding CORS header
			},
		}),
	);
};
