requirejs.config({
    nodeRequire: require,
    shim: {
      'jasmine':{
          exports: 'jasmine'
      }
    }
  });