'use strict';

var gulp = require('gulp');
var less = require('gulp-less');

var config = require('../defaults');

gulp.task('less', ['bower'], function() {

  var baseDir = config.dev ? './dev/' : './dist/';

  return gulp
    .src('./src/assets/stylesheets/humanLibrary.less')
    .pipe(less())
    .pipe(gulp.dest(baseDir));

});
