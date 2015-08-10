'use strict';

var gulp = require('gulp'),
    config = require('./config')(),
    util = require('util'),
    browserSync = require('browser-sync'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
    }),
    middleware = require('./proxy');

function browserSyncInit(baseDir, files, browser) {
    browser = browser === undefined ? 'default' : browser;
    var routes = null;

    // Make sure bower_components is correctly routed
    if (baseDir === config.webapp || (util.isArray(baseDir) && baseDir.indexOf(config.webapp) !== -1)) {
        routes = {
            '/bower_components': 'bower_components'
        };
    }

    if (browserSync.active) {
        return;
    }
    var options = {
        port: 9000,
        startPath: '/',
        server: {
            baseDir: baseDir,
            //directory: true,
            middleware: middleware,
            routes: routes
        },
        files: files || [],
        watchOptions: {
            debounceDelay: 1000
        },
        ghostMode: {
            clicks: true,
            forms: true,
            scroll: true,
            location: false
        },
        injectChanges: true,
        logFileChanges: true,
        logLevel: 'debug',
        logPrefix: 'gulp-patterns',
        notify: true,
        browser: browser
    };
    browserSync(options);
}

gulp.task('fonts', function() {
    return gulp.src(config.fonts.files)
        .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe($.flatten())
        .pipe(gulp.dest(config.fonts.dev));
});

gulp.task('serve', ['fonts', 'inject:watch', 'watch'], function() {
    browserSyncInit([
        config.serve,
        config.webapp
    ], [config.serve + '/**/*.{js,html,css}']);
});

gulp.task('serve:dist', function() {
    gulp.start('build');
    gulp.start(function() {
        browserSyncInit(config.dist);
    });
});