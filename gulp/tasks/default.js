'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

var config = require('../defaults');

gulp.task('default', function(done) {

  config.singleRun = false;

  runSequence(
    'clean', [
      'webserver-dev',
      'test',
      'watch-templates'
    ],
    done
  );

});
