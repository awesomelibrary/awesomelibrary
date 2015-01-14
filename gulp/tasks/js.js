'use strict';

var gulp = require('gulp');

gulp.task('js', function() {
  return gulp
    .src('./src/assets/javascripts/**/*.js')
    .pipe(gulp.dest('./dev/assets/javascripts/'));
});
