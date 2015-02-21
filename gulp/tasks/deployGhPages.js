'use strict';

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var argv = require('yargs').argv;

gulp.task('deployGhPages', function() {

  var options;

  if (argv.ghPagesRemoteUrl) {
    options = {
      remoteUrl: argv.ghPagesRemoteUrl
    }
  }

  return gulp.src('dist/**')
    .pipe(ghPages(options));

});
