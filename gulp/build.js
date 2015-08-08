'use strict';

var gulp = require('gulp'),
    config = require('./config')(),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
    }),
    runSequence = require('run-sequence');

gulp.task('html', function() {
    var htmlFilter = $.filter('*.html'),
        jsFilter = $.filter('**/*.js'),
        cssFilter = $.filter('**/*.css'),
        assets;

    return gulp.src(config.serve + '/*.html')
        .pipe(assets = $.useref.assets())
        .pipe($.rev())
        .pipe(jsFilter)
        .pipe($.uglify({
            preserveComments: $.uglifySaveLicense
        }))
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.replace('../bootstrap-sass-official/assets/fonts/bootstrap', 'fonts'))
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(htmlFilter)
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(htmlFilter.restore())
        .pipe(gulp.dest(config.dist))
        .pipe($.size({
            title: config.dist,
            showFiles: true
        }));
});

gulp.task('images', function() {
    return gulp.src(config.images.files)
        .pipe(gulp.dest(config.images.dest));
});

gulp.task('fonts', function() {
    return gulp.src(config.fonts.files)
        .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe($.flatten())
        .pipe(gulp.dest(config.fonts.dest));
});

gulp.task('misc', function() {
    return gulp.src(config.misc.files)
        .pipe(gulp.dest(config.dist));
});

gulp.task('clean:dev', function(done) {
    $.del([config.tmp], done);
});

gulp.task('clean:prod', function(done) {
    $.del([config.dist], done);
});

gulp.task('build', function() {
    runSequence(['clean:dev', 'clean:prod'], ['images', 'fonts', 'misc', 'inject'], ['html']);
});