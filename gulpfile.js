var gulp = require('gulp'),
    connect = require('gulp-connect'),
    bower = require('gulp-bower'),
    jshint = require('gulp-jshint'),
    usemin = require('gulp-usemin'),
    uglify = require('gulp-uglify'),
    minifyHtml = require('gulp-minify-html'),
    minifyCss = require('gulp-minify-css'),
    rev = require('gulp-rev'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    beautify = require('gulp-beautify');

gulp.task('default', ['src']);

gulp.task('src', ['connect-src', 'watch']);
gulp.task('dist', ['build', 'connect-dist']);

gulp.task('build', ['usemin'], function () {
    gulp.src('./src/assets/fonts/**/*').pipe(gulp.dest('./dist/assets/fonts/'));
    gulp.src('./src/assets/pictures/**/*').pipe(gulp.dest('./dist/assets/pictures/'));
    gulp.src('./src/assets/templates/**/*').pipe(minifyHtml({
        empty: true,
        quotes: true
    })).pipe(gulp.dest('./dist/assets/templates/'));
});

gulp.task('watch', ['watch-less', 'watch-js', 'watch-html']);

gulp.task('clean', ['clean-css', 'clean-dist', 'clean-bower']);

gulp.task('watch-less', ['bower'], function () {

    function compileLess() {
        gulp.src('./src/assets/stylesheets/humanLibrary.less').pipe(less()).on('error', function (errorEvent) {
            console.log('[watch-less] Error: ' + errorEvent.message);
        }).pipe(gulp.dest('./src/assets/stylesheets')).pipe(connect.reload());
        console.log('[watch-less] Compiled');
    }

    compileLess();

    gulp.watch('./src/assets/stylesheets/**/*.less', function (watchEvent) {
        console.log('[watch-less] Changed: ' + watchEvent.path);
        compileLess();
    });

});

gulp.task('watch-js', ['bower'], function () {
    gulp.src('./src/assets/javascripts/**/*.js').pipe(watch(function (files) {
        return files.pipe(jshint()).pipe(jshint.reporter('jshint-stylish')).pipe(connect.reload());
    }));
    gulp.src('./tests/**/*.js').pipe(watch(function (files) {
        return files.pipe(jshint()).pipe(jshint.reporter('jshint-stylish')).pipe(connect.reload());
    }));
});

gulp.task('watch-html', function () {
    gulp.watch(['./src/index.html', './src/assets/templates/**/*.html'], function () {
        gulp.src(['./src/index.html', './src/assets/templates/**/*.html']).pipe(connect.reload());
    });
});

gulp.task('usemin', ['clean-dist', 'less'], function () {
    return gulp.src('./src/index.html').pipe(usemin({
        css: [minifyCss(), 'concat', rev()],
        html: [minifyHtml({
            empty: true,
            quotes: true
        })],
        js: [uglify(), rev()]
    })).pipe(gulp.dest('./dist/'));
});

gulp.task('bower', function () {
    return bower('./src/assets/vendor/bower_components');
});

gulp.task('connect-src', function () {
    connect.server({
        root: 'src',
        livereload: true
    });
});

gulp.task('connect-dist', function () {
    connect.server({
        root: 'dist'
    });
});

gulp.task('less', ['clean-css', 'bower'], function () {
    return gulp.src('./src/assets/stylesheets/humanLibrary.less').pipe(less()).pipe(gulp.dest('./src/assets/stylesheets'));
});

gulp.task('clean-dist', function () {
    return gulp.src('./dist/*', {
        read: false
    }).pipe(clean());
});

gulp.task('clean-bower', function () {
    return gulp.src('./src/assets/vendor/bower_components/', {
        read: false
    }).pipe(clean());
});

gulp.task('clean-css', function () {
    return gulp.src('./src/assets/stylesheets/humanLibrary.css', {
        read: false
    }).pipe(clean());
});

gulp.task('beautify', function () {
    gulp.src('./src/assets/javascripts/**/*.js').pipe(beautify()).pipe(gulp.dest('./src/assets/javascripts/'));
    gulp.src('./tests/**/*.js').pipe(beautify()).pipe(gulp.dest('./tests/'));
    gulp.src(['gulpfile.js', 'karma.conf.js']).pipe(beautify()).pipe(gulp.dest('./'));
});