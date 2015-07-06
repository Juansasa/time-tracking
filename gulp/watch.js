'use strict';

var gulp = require('gulp');
var config = require('./config')();

gulp.task('watch', function() {
    gulp.watch(config.webapp + '/**/*.html', ['inject:html']);
    gulp.watch(config.webapp + '/**/*.scss', ['styles']);
});