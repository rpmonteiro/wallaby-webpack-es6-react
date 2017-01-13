module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js*',
      'setup.js',
      {pattern: 'test/*.js*', ignore: true}
    ],

    tests: [
      'test/**/*.js*'
    ],

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({module: 'commonjs'}),
      '**/*.js*': wallaby.compilers.babel()
    },
    
    env: {
      type: 'node',
      params: {
        env: 'LOCAL_PATH=' + process.cwd()
      }
    },

    testFramework: 'mocha',
    
    setup: function () {
      require.extensions['.jsx'] = require.extensions['.js'];
      require('./setup');
      require('babel-register')({ only: /quill/ });
    }
  };
};
