// netlify/functions/proxy.js
const fetch = require("node-fetch");

exports.handler = async function (event, context) {
	const { path } = event;
	const targetUrl = `https://course-api.com${path.replace(
		"/.netlify/functions/proxy",
		"",
	)}`;

	try {
		const response = await fetch(targetUrl);
		const data = await response.json();

		return {
			statusCode: 200,
			body: JSON.stringify(data),
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: "Failed to fetch data" }),
		};
	}
};
