'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

var config = require('../defaults');

gulp.task('build', function(done) {

  config.dev = false;

  runSequence(
    'clean', [
      'inject',
      'templates',
      'assets',
      'glyphiconfont'
    ],
    done
  );

});
