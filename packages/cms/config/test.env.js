/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable quotes */
'use strict';
const merge = require('webpack-merge');
const devEnv = require('./dev.env');

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
});
