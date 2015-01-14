'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

var config = require('../defaults');

gulp.task('default', function(done) {
  runSequence(
    'clean-dev',
    'webserver-dev',
    done
  );
});
