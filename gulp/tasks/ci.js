'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

var config = require('../defaults');

gulp.task('ci', function(done) {
  config.jsbeautifierVerifyOnly = true;
  runSequence(
    [
      'jsbeautifier',
      'build'
    ],
    done
  );
});
