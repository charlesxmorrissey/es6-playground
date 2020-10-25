'use strict'

const webpack = require('webpack')
const { merge } = require('webpack-merge')

const config = require('./config.js')
const webpackConfig = require('./webpack.config.base')

const webpackDevConfig = merge(webpackConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',

  devServer: {
    ...config.appStats,
    clientLogLevel: 'error',
    contentBase: config.appBuild,
    compress: true,
    hot: true,
    overlay: true,
    publicPath: '/',
  },

  plugins: [
    // Makes some environment variables available to our JS code, for example:
    // if (process.env.NODE_ENV === 'development') { ... }.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],
})

module.exports = webpackDevConfig
