'use strict';

var gulp = require('gulp');

var config = require('../defaults');
var templatesConfig = require('../conifg/templates');

gulp.task('templates', function() {

  var baseDir = config.dev ? 'dev/' : 'dist/';

  return gulp
    .src(templatesConfig.glob)
    .pipe(gulp.dest(baseDir));

});
