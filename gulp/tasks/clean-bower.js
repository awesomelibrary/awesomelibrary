'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean-bower', function() {
  return gulp.src('./src/assets/vendor/bower_components/', {
    read: false
  }).pipe(clean());
});