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
    beautify = require('gulp-beautify'),
    plumber = require('gulp-plumber');

gulp.task('default', ['src']);

gulp.task('src', ['connect-src', 'watch']);
gulp.task('dist', ['build', 'connect-dist']);

gulp.task('build', ['usemin'], function() {
    gulp.src('./src/assets/fonts/**/*').pipe(gulp.dest('./dist/assets/fonts/'));
    gulp.src('./src/assets/pictures/**/*').pipe(gulp.dest('./dist/assets/pictures/'));
    gulp.src('./src/assets/templates/**/*').pipe(minifyHtml({
        empty: true,
        quotes: true
    })).pipe(gulp.dest('./dist/assets/templates/'));
});

gulp.task('watch', ['watch-less', 'watch-js', 'watch-html']);

gulp.task('clean', ['clean-css', 'clean-dist', 'clean-bower']);

gulp.task('watch-less', ['bower'], function() {
    watch({
        name: 'watch-less',
        glob: [
            './src/assets/stylesheets/**/*.less'
        ]
    }, function() {
        gulp.src('./src/assets/stylesheets/humanLibrary.less')
            .pipe(plumber())
            .pipe(less())
            .pipe(gulp.dest('./src/assets/stylesheets'))
            .pipe(connect.reload());
    });
});

gulp.task('watch-js', ['bower'], function() {
    watch({
        name: 'watch-js',
        glob: [
            './src/assets/javascripts/**/*.js',
            './tests/**/*.js'
        ]
    }, function(files) {
        files
            .pipe(plumber())
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(connect.reload());
    });
});

gulp.task('watch-html', function() {
    watch({
        name: 'watch-html',
        glob: [
            './src/index.html',
            './src/assets/templates/**/*.html'
        ]
    }, function(files) {
        files
            .pipe(plumber())
            .pipe(connect.reload());
    });
});

gulp.task('usemin', ['clean-dist', 'less'], function() {
    return gulp.src('./src/index.html').pipe(usemin({
        css: [minifyCss(), 'concat', rev()],
        html: [minifyHtml({
                empty: true,
                quotes: true
            })],
        js: [uglify(), rev()]
    })).pipe(gulp.dest('./dist/'));
});

gulp.task('bower', function() {
    return bower('./src/assets/vendor/bower_components');
});

gulp.task('connect-src', function() {
    connect.server({
        root: 'src',
        livereload: true
    });
});

gulp.task('connect-dist', function() {
    connect.server({
        root: 'dist'
    });
});

gulp.task('less', ['clean-css', 'bower'], function() {
    return gulp.src('./src/assets/stylesheets/humanLibrary.less').pipe(less()).pipe(gulp.dest('./src/assets/stylesheets'));
});

gulp.task('clean-dist', function() {
    return gulp.src('./dist/*', {
        read: false
    }).pipe(clean());
});

gulp.task('clean-bower', function() {
    return gulp.src('./src/assets/vendor/bower_components/', {
        read: false
    }).pipe(clean());
});

gulp.task('clean-css', function() {
    return gulp.src('./src/assets/stylesheets/humanLibrary.css', {
        read: false
    }).pipe(clean());
});

gulp.task('beautify', function() {
    gulp.src('./src/assets/javascripts/**/*.js').pipe(beautify()).pipe(gulp.dest('./src/assets/javascripts/'));
    gulp.src('./tests/**/*.js').pipe(beautify()).pipe(gulp.dest('./tests/'));
    gulp.src(['gulpfile.js', 'karma.conf.js']).pipe(beautify()).pipe(gulp.dest('./'));
});

gulp.task('ci');