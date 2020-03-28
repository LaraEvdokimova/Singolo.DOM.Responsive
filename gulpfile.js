const
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src(['*.sass'])
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(gulp.dest('styles'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', function () {
    gulp.watch(['*.sass'], gulp.parallel('sass'));
});

gulp.task('default', gulp.parallel('watch', 'sass'));
