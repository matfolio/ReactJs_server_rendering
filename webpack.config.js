var path = require('path')
var config = {
   entry: './entry.js',
	
   output: {
      path:__dirname,
      filename: 'dist/bundle.js',
   },
	watch:true,
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;