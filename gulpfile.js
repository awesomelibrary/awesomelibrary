var gulp = require('gulp');
var refillAngular = require('./tasks/');

refillAngular.init({
  inject: {
    absolute: false
  },
  assets: {
    globs: [
      'src/**/_assets/**',
      '.nojekyll',
      'node_modules/bootstrap-sass/assets/fonts/**'
    ]
  }
}, undefined, gulp);

require('./gulp/tasks/deployGhPages');
