'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// load all routes except index (of course)
module.exports = function (app) {

  _fs2.default.readdirSync(__dirname + '/').forEach(function (file) {
    if (_path2.default.extname(file) === '.js' && file !== 'index.js') {
      var route = require('./' + file);
      console.info('Adding route /api/' + file.slice(0, -3));
      app.use("/api/" + file.slice(0, -3), route.controller(app)); // Should generate /api/myRoute 
    }
  });

  // add the public route
  app.use(_express2.default.static(_path2.default.join(__dirname, '../../public')));
};