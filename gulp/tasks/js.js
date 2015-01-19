'use strict';

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require('browserify');
var gutil = require('gulp-util');
var notify = require('gulp-notify');

var config = require('../defaults');

gulp.task('js', ['bower'], function() {

  var bundler;

  function rebundle() {

    var stream;

    stream = bundler.bundle();

    if (config.dev) {
      stream = stream.on('error', notify.onError('Browserify error: <%= error.message %>'));
    }

    stream = stream
      .pipe(source('index.js'))
      .pipe(gulp.dest((config.dev ? 'dev/' : 'dist/') + 'humanLibrary/'))
      .on('end', function() {
        gutil.log(gutil.colors.magenta('browserify'), 'finished');
      });

    return stream;

  }

  gutil.log(gutil.colors.magenta('browserify'), 'starting...');

  bundler = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true,
    entries: ['./src/humanLibrary/index.js'],
    debug: true
  });

  bundler.transform('debowerify');
  bundler.transform('browserify-ngannotate');

  if (config.dev) {
    bundler = watchify(bundler);
    bundler.on('update', function(changedFiles) {
      gutil.log(gutil.colors.magenta('watchify'), 'detected files', changedFiles, 'have changed, starting...');
    });
    bundler.on('update', rebundle);
  }

  return rebundle();

});
