const requirejs = require("requirejs");
requirejs.config({
  nodeRequire: require,
  shim: {
    "jasmine": {
      exports: "jasmine"
    }
  }
});
global.define = require("requirejs");
global.describe = require("jasmine").describe;
global.it = require("jasmine").it;
global.expect = require("jasmine").expect;
requirejs(["../calc"], function (ModuleSpec) {
  console.log("ModuleSpec: ", ModuleSpec);
  const jasmine = require("jasmine");
  jasmine.add;
  jasmine();
});
