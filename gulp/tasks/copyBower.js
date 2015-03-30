'use strict';

function copyBowerTask(mode) {

  var gulp = require('gulp');

  gulp.task('copy-bower', ['bower'], function() {

    var baseDir = mode.dev ? 'dev/' : 'dist/';

    return gulp
      .src('bower_components/bootstrap/fonts/**/*', {
        base: './'
      })
      .pipe(gulp.dest(baseDir + '_assets/'));

  });

}

module.exports = copyBowerTask;
