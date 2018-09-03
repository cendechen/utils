var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, './'),
  entry: {
    main: './index.js'
  },
  output: {
    filename: 'main.js',
    path: path.join(__dirname, '/dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader']
    }]
  },
  resolve: {
    alias: {
      '@':path.resolve(__dirname, 'src')
    }
  },
  devServer: { // 开发server
    contentBase: path.join(__dirname, './'),
    compress: false,
    port: 8080,
    hot: true
  },
  devtool: 'eval-source-map', // 开发的map指定
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
