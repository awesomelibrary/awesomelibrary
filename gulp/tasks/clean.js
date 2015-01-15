'use strict';

var gulp = require('gulp');
var del = require('del');

var config = require('../defaults');

gulp.task('clean', function(done) {

  var baseDir = config.dev ? './dev/*' : './dist/*';

  del(baseDir, done);

});
