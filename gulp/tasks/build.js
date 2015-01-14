'use strict';

var gulp = require('gulp');
var minifyHtml = require('gulp-minify-html');

gulp.task('build', ['usemin'], function() {
  gulp.src('./src/assets/fonts/**/*').pipe(gulp.dest('./dist/assets/fonts/'));
  gulp.src('./src/assets/pictures/**/*').pipe(gulp.dest('./dist/assets/pictures/'));
  gulp.src('./src/assets/templates/**/*').pipe(minifyHtml({
    empty: true,
    quotes: true
  })).pipe(gulp.dest('./dist/assets/templates/'));
});