'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean-css', function() {
  return gulp.src('./src/assets/stylesheets/humanLibrary.css', {
    read: false
  }).pipe(clean());
});