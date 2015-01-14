'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('inject', ['js', 'less'], function() {
  return gulp
    .src('./src/index.html')
    .pipe(inject(
      gulp.src([
        './dev/assets/javascripts/**/*.js',
        './dev/*.css'
      ], {
        read: false
      }), {
        ignorePath: '/dev'
      }
    ))
    .pipe(gulp.dest('./dev'));
});
