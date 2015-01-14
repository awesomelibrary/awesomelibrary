'use strict';

var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', ['clean-css', 'bower'], function() {
  return gulp.src('./src/assets/stylesheets/humanLibrary.less').pipe(less()).pipe(gulp.dest('./src/assets/stylesheets'));
});
