'use strict';

var gulp = require('gulp');
var beautify = require('gulp-beautify');

gulp.task('beautify', function() {
  gulp.src('./src/assets/javascripts/**/*.js').pipe(beautify()).pipe(gulp.dest('./src/assets/javascripts/'));
  gulp.src('./tests/**/*.js').pipe(beautify()).pipe(gulp.dest('./tests/'));
  gulp.src(['gulpfile.js', 'karma.conf.js']).pipe(beautify()).pipe(gulp.dest('./'));
});