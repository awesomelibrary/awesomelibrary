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

gulp.task('src', ['bower', 'connect-src', 'watch']);
gulp.task('dist', ['build', 'connect-dist']);

gulp.task('build', ['usemin'], function () {
    gulp.src('./src/assets/vendor/bower_components/bootstrap/dist/fonts/**/*').pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('watch', ['watch-less', 'watch-js', 'watch-html']);

gulp.task('clean', ['clean-css', 'clean-dist', 'clean-bower']);

gulp.task('watch-less', function () {
    gulp.src('./src/assets/stylesheets/humanLibrary.less').pipe(watch(function (files) {
        return files.pipe(less()).pipe(gulp.dest('./src/assets/stylesheets')).pipe(connect.reload());
    }));
});

gulp.task('watch-js', function () {
    gulp.src('./src/assets/javascripts/**/*.js').pipe(watch(function (files) {
        return files.pipe(jshint()).pipe(jshint.reporter('jshint-stylish')).pipe(connect.reload());
    }));
});

gulp.task('watch-html', function () {
    gulp.src(['./src/index.html', './src/assets/templates/**/*.html']).pipe(watch(function (files) {
        return files.pipe(connect.reload());
    }));
});

gulp.task('usemin', ['clean-dist', 'less'], function () {
    return gulp.src('./src/index.html').pipe(usemin({
        css: [minifyCss(), 'concat', rev()],
        html: [minifyHtml({
            empty: true
        })],
        js: [uglify(), rev()]
    })).pipe(gulp.dest('./dist/'));
});

gulp.task('bower', function () {
    bower('./src/assets/vendor/bower_components');
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
    gulp.src('./dist/*', {
        read: false
    }).pipe(clean());
});

gulp.task('clean-bower', function () {
    gulp.src('./src/assets/vendor/bower_components/', {
        read: false
    }).pipe(clean());
});

gulp.task('clean-css', function () {
    gulp.src('./src/assets/stylesheets/**/*.css', {
        read: false
    }).pipe(clean());
});

gulp.task('beautify', function () {
    gulp.src('./src/assets/javascripts/**/*.js').pipe(beautify()).pipe(gulp.dest('./src/assets/javascripts/'));

    gulp.src(['gulpfile.js', 'karma.conf.js']).pipe(beautify()).pipe(gulp.dest('./'));
});