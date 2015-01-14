'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

gulp.task('watch-js', ['bower'], function() {
  watch({
    name: 'watch-js',
    glob: [
      './src/assets/javascripts/**/*.js',
      './tests/**/*.js'
    ]
  }, function(files) {
    files
      .pipe(plumber())
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(connect.reload());
  });
});