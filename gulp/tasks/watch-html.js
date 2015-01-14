'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var connect = require('gulp-connect');

gulp.task('watch-html', function() {
  watch({
    name: 'watch-html',
    glob: [
      './src/index.html',
      './src/assets/templates/**/*.html'
    ]
  }, function(files) {
    files
      .pipe(plumber())
      .pipe(connect.reload());
  });
});
