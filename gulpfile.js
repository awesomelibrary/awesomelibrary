'use strict';

var gulp = require('gulp');
var zkflow = require('gulp-zkflow-angular');

var getOutputDir = zkflow.init({
  bower: {
    globs: 'bower_components/bootstrap/fonts/**/*',
    globsOptions: {
      base: './'
    },
    outputDirSuffix: '_assets/'
  },
  css: {
    enabled: false
  },
  inject: {
    absolute: false
  }
}, undefined, gulp);

gulp.task('css', ['bower'], require('./gulp/tasks/css')(getOutputDir));
require('./gulp/tasks/deployGhPages');
