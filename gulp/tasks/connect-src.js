'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect-src', function() {
  connect.server({
    root: 'src',
    livereload: true
  });
});
