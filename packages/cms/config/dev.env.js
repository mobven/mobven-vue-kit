/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable quotes */
"use strict";

const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
});
