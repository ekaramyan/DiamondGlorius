require('dotenv').config()

const nextConfig = {
	output: 'standalone',
	images: {
		remotePatterns: [
			{ hostname: process.env.API_URL.slice(0, -4) },
			{ hostname: 'd3at7kzws0mw3g.cloudfront.net' },
		],
	},
	env: {
		API_URL: process.env.API_URL,
		API_TOKEN: process.env.API_TOKEN,
		CAPTCHA_KEY: process.env.CAPTCHA_KEY,
	},
}

module.exports = nextConfig
