const withPWA = require('next-pwa');
// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');

// module.exports = withPlugins([
// 	[optimizedImages, {
// 		/* config for next-optimized-images */
// 	}],

// 	// your other plugins here

// ])

module.exports = withPWA({
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
	},
		// experimental: {
		// 	images: {
		// 		unoptimized: true,
		// 	},
		// },
});
