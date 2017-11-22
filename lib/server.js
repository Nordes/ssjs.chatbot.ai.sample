'use strict';

var _superscript = require('superscript');

var _superscript2 = _interopRequireDefault(_superscript);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || _config2.default.env.port || 5000;

app.use(_bodyParser2.default.json());

_superscript2.default.setup(_config2.default.env.superScript, function (err, botInstance) {
  if (err) {
    console.error(err);
  }

  app.bot = botInstance;
  (0, _routes2.default)(app);

  app.listen(PORT, function () {
    console.log('\uD83D\uDE80===> Server is now running on port ' + PORT + '\uD83D\uDE80');
  });
});