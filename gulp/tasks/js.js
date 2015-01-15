'use strict';

var gulp = require('gulp');

var config = require('../defaults');

gulp.task('js', function() {

  var baseDir = config.dev ? './dev' : './dist';

  return gulp
    .src('./src/assets/javascripts/**/*.js')
    .pipe(gulp.dest(baseDir + '/assets/javascripts/'));

});
