'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var babel = require('gulp-babel');

gulp.task('copy_src', function () {
        return gulp.src('../src/**/*').pipe(gulp.dest('src'));
});

gulp.task('es6', function () {
        return gulp.src('src/**/*.es6').pipe(babel({ presets: ['es2015'] })).pipe(gulp.dest('src'));
});

gulp.task('copy_gulpfile', function () {
        return gulp.src('src/npm/gulpfile.js').pipe(gulp.dest('../src/npm'));
});

gulp.task('copy', runSequence('copy_src', 'es6', 'copy_gulpfile'));