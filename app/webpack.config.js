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
		path: '../__build__/',
		filename: 'scripts/bundle.js'
	},
	module:{
		loaders:[
			{test:/\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
			{test:/\.css$/,loader: 'style!css'},
			{test: /\.(png|jp(e)?g|gif|svg|cur)/, loader: 'url?limit=8192&name=/images/[name].[ext]'},
    	{test: /\.(ico|ttf|eot|woff(2)?)/, loader: 'file?name=/fonts/[name].[ext]'}
		]
	},
	babel: { presets: ['es2015', 'react']} ,
	plugins: [
		injectScripts
	]
}