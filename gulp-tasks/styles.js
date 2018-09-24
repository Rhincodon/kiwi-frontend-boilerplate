const config = require('config');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const sass = require('gulp-sass');
const wait = require('gulp-wait');

module.exports = function () {
    return this.gulp.src(`${config.get('scss.sourceDir')}/bootstrap.scss`)
        .pipe(wait(300))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            tailwindcss('./tailwind.js'),
            autoprefixer()
        ]))
        .pipe(this.gulp.dest(`${config.get('scss.targetDir')}`));
};
