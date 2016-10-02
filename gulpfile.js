process.env.NODE_ENV === "production";

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

require('gulp-task-loader')({
    browserSync: browserSync
});

gulp.task('default', function () {
    gulp.start('watch');
});
