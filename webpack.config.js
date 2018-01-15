'use strict';

let webpack = require('webpack');
// let path = require('path');
// let ExtractTextPlugin = require("extract-text-webpack-plugin");  //独立打包less

module.exports = {
	devtool: 'eval-sorce-map',
	entry: './index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'index.js'
	},

	devServer: {
		inline: true,
		port: '8001',
		hot: true,
		historyApiFallback:true
	},

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		},{
            test: /\.css$/,
            loader: "style!css"
        },
        {
            test: /\.less/,
            loader: 'style-loader!css-loader!less-loader'
        }]
	},
	plugins:[
          new webpack.HotModuleReplacementPlugin()
     ]
}