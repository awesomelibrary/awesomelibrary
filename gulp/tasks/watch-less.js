'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');
var less = require('gulp-less');

gulp.task('watch-less', ['bower'], function() {
  watch({
    name: 'watch-less',
    glob: [
      './src/assets/stylesheets/**/*.less'
    ]
  }, function() {
    gulp.src('./src/assets/stylesheets/humanLibrary.less')
      .pipe(plumber())
      .pipe(less())
      .pipe(gulp.dest('./src/assets/stylesheets'))
      .pipe(connect.reload());
  });
});