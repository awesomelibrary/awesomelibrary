'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect-dist', function() {
  connect.server({
    root: 'dist'
  });
});