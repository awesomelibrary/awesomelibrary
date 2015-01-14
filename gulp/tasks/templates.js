'use strict';

var gulp = require('gulp');

gulp.task('templates', function() {
  return gulp
    .src('./src/assets/templates/**/*.html')
    .pipe(gulp.dest('./dev/assets/templates/'));
});
