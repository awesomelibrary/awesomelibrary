'use strict';

var gulp = require('gulp');

var config = require('../defaults');

gulp.task('assets', function() {

  var baseDir = config.dev ? './dev' : './dist';

  return gulp
    .src([
      './src/assets/fonts/**',
      './src/assets/pictures/**'
    ], {
      base: './src/assets/'
    })
    .pipe(gulp.dest(baseDir + '/assets/'));

});

gulp.task('assets-bower', function() {

  var baseDir = config.dev ? './dev' : './dist';

  return gulp
    .src('./bower_components/**')
    .pipe(gulp.dest(baseDir + '/bower_components/'));

});

gulp.task('glyphiconfont', function() {

  var baseDir = config.dev ? './dev' : './dist';

  return gulp
    .src('./bower_components/bootstrap/fonts/**')
    .pipe(gulp.dest(baseDir + '/fonts/'));

});
