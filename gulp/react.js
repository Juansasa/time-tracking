'use strict';

var gulp = require('gulp'),
    config = require('./config')(),
    babelify = require('babelify'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream');

function scripts(watch) {
    var bundler, rebundle;
    bundler = browserify({
        entries: [config.jsx.main],
        extensions: ['.jsx'],
        debug: true,
        cache: {}, // required for watchify
        packageCache: {}, // required for watchify
        fullPaths: watch
    });

    if (watch) {
        bundler = watchify(bundler);
    }

    bundler.transform(babelify);

    rebundle = function() {
        var stream = bundler.bundle();
        stream.on('error', function handleError(err) {
            console.error(err.toString());
            this.emit('end');
        });
        stream = stream.pipe(source('app.js'))
            .pipe(gulp.dest(config.jsx.dest));

        return stream;
    };

    bundler.on('update', rebundle);
    return rebundle();
}

gulp.task('react', function() {
    return scripts(false);
});

gulp.task('react:watch', function() {
    return scripts(true);
});