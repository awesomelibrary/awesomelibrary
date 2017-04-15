var gulp = require('gulp');
var refillAngular = require('./tasks/');

refillAngular.init({
  inject: {
    absolute: false
  },
  assets: {
    globs: [
      'src/**/_assets/**',
      'node_modules/bootstrap-sass/assets/fonts/**',
      '_redirects'
    ]
  }
}, undefined, gulp);
