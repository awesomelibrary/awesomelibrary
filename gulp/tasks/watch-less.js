'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('watch-less', function() {

  gulp.watch('src/**/*.less', ['less'])
    .on('change', function(event) {
      gutil.log(gutil.colors.magenta('watch-less'), 'detected file', event.path, 'have changed, starting...');
    });

});
