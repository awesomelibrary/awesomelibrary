'use strict';

var gulp = require('gulp');
var usemin = require('gulp-usemin');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var uglify = require('gulp-uglify');

gulp.task('usemin', ['clean-dist', 'less'], function() {
  return gulp.src('./src/index.html').pipe(usemin({
    css: [minifyCss(), 'concat', rev()],
    html: [minifyHtml({
      empty: true,
      quotes: true
    })],
    js: [uglify(), rev()]
  })).pipe(gulp.dest('./dist/'));
});
