'use strict';

var gulp = require('gulp');
var zkflowAngular = require('gulp-zkflow-angular');
var mode;

mode = zkflowAngular({
  build: {
    sequence: [
      'clean', [
        'inject',
        'assets',
        'copy-bower'
      ]
    ]
  },
  default: {
    sequence: [
      'clean', [
        'inject',
        'assets',
        'jshint',
        'test',
        'copy-bower'
      ],
      'webserver'
    ]
  },
  js: {
    devEntries: ['./src/index.js']
  },
  inject: {
    absolute: false
  }
}, gulp);

require('./gulp/tasks/copyBower')(mode);
require('./gulp/tasks/deployGhPages');
