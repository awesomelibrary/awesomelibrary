'use strict';

var gulp = require('gulp');

gulp.task('assets', function() {
  return gulp
    .src([
      './src/assets/fonts/**',
      './src/assets/pictures/**'
    ], {
      base: './src/assets/'
    })
    .pipe(gulp.dest('./dev/assets/'));
});

gulp.task('assets-bower', function() {
  return gulp
    .src('./bower_components/**')
    .pipe(gulp.dest('./dev/bower_components/'));
});
