'use strict';

var gulp = require('gulp');
var mode = require('gulp-zkflow-angular').mode;

function getCssTask(getOutputDir) {

  function cssTask(next) {

    var less = require('gulp-less');
    var csso = require('gulp-csso');
    var streamify = require('gulp-streamify');
    var rev = require('gulp-rev');
    var gulpif = require('gulp-if');
    var autoprefixer = require('gulp-autoprefixer');
    var plumber = require('gulp-plumber');
    var watch = require('gulp-watch');
    var zkutils = require('gulp-zkflow-utils');
    var q = require('q');
    var outputDir = getOutputDir();
    var logger = zkutils.logger('css');
    var nextHandler;
    var runCssPromise;

    function runCss() {

      var promise = zkutils.globby('src/index.less', 'No ' + 'src/index.less' + '  file found');

      return nextHandler.handle(promise, {
        ignoreFailures: true,
        handleSuccess: false
      }).then(function() {

        var deferred = q.defer();

        gulp.src('src/index.less')
          .pipe(plumber(deferred.reject))
          .pipe(less())
          .pipe(autoprefixer({
            cascade: false
          }))
          .pipe(gulpif(mode.env !== 'dev' && !mode.watch, csso()))
          .pipe(gulpif(mode.env !== 'dev' && !mode.watch, streamify(rev())))
          .pipe(gulp.dest(outputDir))
          .on('end', deferred.resolve);

        return nextHandler.handle(deferred.promise);

      });

    }

    nextHandler = new zkutils.NextHandler({
      next: next,
      watch: mode.watch,
      logger: logger
    });

    runCssPromise = runCss()
      .finally(function() {
        if (mode.watch) {
          watch([
            'src/*.{less,css}',
            'src/**/*.{less,css}'
          ], function(event) {
            logger.changed(event);
            runCssPromise = runCssPromise.finally(runCss);
          });
        }
      });

  }

  return cssTask;

}

module.exports = getCssTask;
