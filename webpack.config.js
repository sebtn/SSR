const path = require('path')
module.exports = {
  entry: './client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve( __dirname, 'public')
  },
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /node_moudules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
} 