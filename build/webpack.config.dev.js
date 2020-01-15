'use strict'

const config = require('./config.js')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.base')
const webpackMerge = require('webpack-merge')

const webpackDevConfig = webpackMerge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',

  devServer: {
    ...config.appStats,
    clientLogLevel: 'error',
    contentBase: config.appBuild,
    compress: true,
    hot: true,
    overlay: true,
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
