'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');

var templatesConfig = require('../conifg/templates');

gulp.task('watch-templates', function() {

  gulp.watch(templatesConfig.glob, ['templates'])
    .on('change', function(event) {
      gutil.log(gutil.colors.magenta('watch-templates'), 'detected file', event.path, 'have changed, starting...');
    });

});
