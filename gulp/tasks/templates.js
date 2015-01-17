'use strict';

var gulp = require('gulp');

var config = require('../defaults');

gulp.task('templates', function() {

  var baseDir = config.dev ? './dev/' : './dist/';

  return gulp
    .src('./src/assets/templates/**/*.html')
    .pipe(gulp.dest(baseDir + 'humanLibrary/assets/templates/'));
});
