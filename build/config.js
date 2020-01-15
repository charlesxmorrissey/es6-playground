const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

module.exports = {
  appBase: appDirectory,
  appBuild: resolveApp('dist'),
  appEnv: process.env.NODE_ENV,
  appIndexJs: resolveApp('src/index.js'),
  appNodeModules: resolveApp('node_modules'),
  appProdSourceMap: false,
  appSrc: resolveApp('src'),
  appStats: {
    stats: {
      children: false,
      chunkModules: false,
      chunks: false,
      colors: true,
      modules: false,
    },
  },
  appTemplateMeta: {
    description: 'ES6 boilerplate starter app for rapid development.',
    template: resolveApp('public/index.html'),
    title: 'ES6 Playground',
  },
}
