'use strict';

var gulp = require('gulp');
var zkflowAngular = require('zkflow-angular');

var getOutputDir = zkflowAngular.init({
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
  },
  assets: {
    globs: [
      'src/**/_assets/**',
      'src/.nojekyll'
    ]
  }
}, undefined, gulp);

gulp.task('css', ['bower'], require('./gulp/tasks/css')(getOutputDir));
require('./gulp/tasks/deployGhPages');
