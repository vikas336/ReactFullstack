var path = require("path");
var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

  mode: 'development',
  devtool: 'cheap-module-eval-source-map',

  // We add an entry to connect to the hot loading middleware from
  // the page
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: '/static/'  
  },

  // This plugin activates hot loading
  plugins: 
  [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules:[
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    }, 
    {
      test: /\.css?$/,
      use: ["style-loader", "css-loader"] // This are the loaders
    }
    ]
  }
}