var htmlpack = require('html-webpack-plugin');

var injectScripts = new htmlpack({
	inject: 'body',
	template: 'index.html'
});

module.exports = {
	entry: {
		bundle: './scripts/index.js'
	},
	output: {
		path: '../__build__',
		filename: 'bundle.js'
	},
	module:{
		loaders:[
			{test:/\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
		]
	},
	babel: { presets: ['es2015', 'react']} ,
	plugins: [
		injectScripts
	]
}