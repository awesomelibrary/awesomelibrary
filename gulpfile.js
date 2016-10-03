var gulp = require('gulp');
var refillAngular = require('refill-angular');

var getOutputDir = refillAngular.init({
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
