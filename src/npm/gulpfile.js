var gulp = require('gulp');

gulp.task('copy', function(){
    return gulp.src('../src/**/*.es6')
        .pipe(gulp.dest('src'))
});
