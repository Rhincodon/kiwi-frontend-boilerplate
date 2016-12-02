require('dotenv').config();

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

require('gulp-task-loader')({
    browserSync: browserSync
});

gulp.task('default', function () {
    const bundler = require('./bundler')(gulp);
    bundler.b.on('update', bundler.bundle);

    gulp.task('js-watch', bundler.bundle);
    bundler.bundle();

    gulp.start('watch');
});
