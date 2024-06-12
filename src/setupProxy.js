const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		"/api",
		createProxyMiddleware({
			target: "https://course-api.com",
			changeOrigin: true,
			pathRewrite: {
				"^/api": "", // remove /api prefix when forwarding request
			},
		}),
	);
};
