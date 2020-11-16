const webpack = require('webpack')
const path = require('path')

module.exports = {
	devServer: {
		host: process.env.domain ? process.env.domain : null,
		port: 8080,
		historyApiFallback: true,
		noInfo: true,
		overlay: true,
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1500
		},
	},
	lintOnSave: false,
	configureWebpack: {
		entry: ['./src/Bootstrap.js'],
		plugins: [
			// Jquery loader plugin.
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery'
			})
		]
	},
}