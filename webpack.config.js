const htmlConfig  = require('./webpack/htmlConfig');
const stylesheetConfig   = require('./webpack/stylesheetConfig');
const javascriptConfig    = require('./webpack/javascriptConfig');

module.exports = [
  htmlConfig,
  stylesheetConfig,
  javascriptConfig,
];
