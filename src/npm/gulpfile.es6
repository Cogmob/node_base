const gulp = require('gulp');
const runSequence = require('run-sequence');
const babel = require('gulp-babel');
const ava = require('gulp-ava');
const del = require('del');

gulp.task('delete_src', ()=>{
    return del(['src']);});

gulp.task('copy_src', ()=>{
    return gulp.src('../src/**/*')
            .pipe(gulp.dest('src'));})

gulp.task('es6', ()=>{
    return gulp.src('src/**/*.es6')
            .pipe(babel({ presets: ['es2015'] }))
            .pipe(gulp.dest('src'));});

gulp.task('copy_gulpfile_1', ()=>{
    return gulp.src('src/npm/gulpfile.js')
            .pipe(gulp.dest('../src/npm'));});

gulp.task('copy_gulpfile_2', ()=>{
    return gulp.src('src/npm/gulpfile.js')
            .pipe(gulp.dest('.'));});

gulp.task('copy', runSequence('delete_src', 'copy_src', 'es6', 'copy_gulpfile_1', 'copy_gulpfile_2'));
gulp.task('test', ()=>gulp.src('src/**/*test.js').pipe(ava({verbose: true})));
