'use strict';

var gulp = require('gulp'),
    config = require('./config')(),
    runSequence = require('run-sequence'),
    $ = require('gulp-load-plugins')(),
    wiredep = require('wiredep').stream,
    injectOptions = {
        ignorePath: [config.webapp, config.serve],
        addRootSlash: false
    };

//
// Inject CSS, JS, Bower dependencies to annotated HTML files
//

function injectHelper() {
    function injectScripts() {
        return gulp.src(config.jsx.files);
    }

    function injectStyles() {
        return gulp.src(config.css.files, {
            read: false
        });
    }

    return gulp.src([config.webapp + '/*.html'])
        .pipe($.inject(injectScripts(), injectOptions))
        .pipe($.inject(injectStyles(), injectOptions))
        .pipe(wiredep(config.wiredepOptions))
        .pipe(gulp.dest(config.serve));
}

gulp.task('inject:html', function() {
    return injectHelper();
});


gulp.task('inject', function() {
    return runSequence(['react', 'styles'], injectHelper);
});

gulp.task('inject:watch', ['react:watch', 'styles'], function() {
    return runSequence(['react:watch', 'styles'], injectHelper);
});