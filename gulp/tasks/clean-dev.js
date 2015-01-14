'use strict';

var gulp = require('gulp');
var del = require('del');

gulp.task('clean-dev', function(done) {
  del('./dev/*', done);
});
