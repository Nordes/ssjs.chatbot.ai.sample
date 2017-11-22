'use strict'
var path = require('path')
var usedEnvConfig = require('./dev.env.js')
var prodEnvConfig = require('./prod.env.js')

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}

if (process.env.NODE_ENV === 'production') {
  Object.assign(usedEnvConfig, prodEnvConfig)
}

module.exports = {
  build: {
    assetsRoot: path.resolve(__dirname, '../lib'),
    assetsSubDirectory: '' // no sub, but usually 'static'
  },
  env: usedEnvConfig
}
