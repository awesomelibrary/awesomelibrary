'use strict';

var gulp = require('gulp');
var bower = require('gulp-bower');

gulp.task('bower', function() {
  return bower('./src/assets/vendor/bower_components');
});