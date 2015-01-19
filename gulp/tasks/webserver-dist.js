'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver-dist', function() {
  gulp.src('dist/')
    .pipe(webserver({
      directoryListing: false,
      open: true
    }));
});
