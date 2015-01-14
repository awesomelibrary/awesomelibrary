'use strict';

var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', ['bower'], function() {
  return gulp
    .src('./src/assets/stylesheets/humanLibrary.less')
    .pipe(less())
    .pipe(gulp.dest('./dev/'));
});
