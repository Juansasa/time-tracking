'use strict';

var gulp = require('gulp');
var config = require('./config')();

gulp.task('watch', function() {
    gulp.watch(config.webapp + '/**/*.html', ['inject']);
    gulp.watch(config.webapp + '/**/*.scss', ['inject']);
});