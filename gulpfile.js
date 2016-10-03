'use strict';

var gulp = require('gulp');
var zkflowAngular = require('zkflow-angular');

var getOutputDir = zkflowAngular.init({
  css: {
    enabled: false
  },
  inject: {
    absolute: false
  },
  assets: {
    globs: [
      'src/**/_assets/**',
      '.nojekyll',
      'node_modules/bootstrap/fonts/**'
    ]
  }
}, undefined, gulp);

gulp.task('css', require('./gulp/tasks/css')(getOutputDir));
require('./gulp/tasks/deployGhPages');
