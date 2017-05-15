const webpackConfig = require('./webpack.config');
const { isDevelopment } = require('./isDevelopment');

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      { pattern: 'src/indexSpec.ts', watched: false }
    ],

    exclude: [
    ],

    preprocessors: {
      'src/indexSpec.ts': ['webpack', 'sourcemap']
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_WARN,

    autoWatch: isDevelopment,

    browsers: ['Chrome'],

    singleRun: !isDevelopment,

    concurrency: Infinity,

    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
      plugins: webpackConfig.plugins,
      devtool: webpackConfig.devtool
    },

    mime: {
      'text/x-typescript': ['ts','tsx']
    }

  })
};
