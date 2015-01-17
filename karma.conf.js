'use strict';

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'browserify'],
    browserify: {
      debug: true,
      transform: ['debowerify']
    },
    reporters: ['progress'],
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS']
  });
};
