const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
		path.join(__dirname, '../index.js')
	],
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.(less|css|scss)$/,
				loaders: ["style-loader", "css-loader", "less-loader", "sass-loader"]
			},
			{
              test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
              use: [
                { loader: 'file-loader' }
              ]
            }
		]
	},
	output: {
	    path: __dirname + '../dist',
	    filename: 'bundle.js'
	},
	devServer: {
		inline:true,
		host: "0.0.0.0",
  		port: 1234,
	    contentBase: __dirname + '/dist',
	    historyApiFallback: true
	}
}
