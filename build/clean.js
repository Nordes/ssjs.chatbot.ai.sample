var path = require('path')
var rm = require('rimraf')
var config = require('../config')

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) {
    throw err
  }
})
