'use strict'

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const config = require('./config.js')
const webpackConfig = require('./webpack.config.base')

const webpackProdConfig = merge(webpackConfig, {
  mode: 'production',
  devtool: config.appProdSourceMap ? 'source-map' : false,

  output: {
    chunkFilename: 'js/[name].[chunkhash:8].js',
    filename: 'js/[name].[chunkhash:8].js',
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],

    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },

  plugins: [
    // Makes some environment variables available to our JS code, for example:
    // if (process.env.NODE_ENV === 'production') { ... }.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),

    // Removes the `dist` directory before compilation.
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [config.appBuild],
      verbose: true,
    }),
  ],
})

module.exports = webpackProdConfig
