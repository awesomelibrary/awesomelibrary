'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');

var config = require('../defaults');

gulp.task('inject', ['js', 'less'], function() {

  var baseDir = config.dev ? '/dev' : '/dist';

  return gulp
    .src('./src/index.html')
    .pipe(inject(
      gulp.src([
        '.' + baseDir + '/assets/javascripts/**/*.js',
        '.' + baseDir + '/*.css'
      ], {
        read: false
      }), {
        ignorePath: baseDir
      }
    ))
    .pipe(gulp.dest('.' + baseDir));
});
