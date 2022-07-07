/* eslint-disable */
const requirejs = require('requirejs');
requirejs.config({
  nodeRequire: require,
  shim: {
    'jasmine':{
        exports: 'jasmine'
    }
  }
});

//make define available globally like it is in the browser
global.define = require('requirejs');
//make jasmine available globally like it is in the browser
global.describe = require(
    'jasmine').describe;
global.it = require('jasmine').it;
global.expect = require(
    'jasmine').expect;

//bring in and list all the tests to be run
requirejs(['../calc'], function (ModuleSpec) {
  console.log("ModuleSpec: ", ModuleSpec);
  const jasmine = require('jasmine');
  jasmine.add
  jasmine()
});