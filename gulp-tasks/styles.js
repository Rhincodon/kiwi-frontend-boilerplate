const config = require('config');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer');
const lost = require('lost');
const rupture = require('rupture');

module.exports = function () {
    return this.gulp.src(`${config.get('stylus.sourceDir')}/bootstrap.styl`)
        .pipe(stylus({
            use: [rupture()]
        }))
        .pipe(postcss([
            lost()
        ]))
        .pipe(autoprefixer())
        .pipe(this.gulp.dest(`${config.get('stylus.targetDir')}`));
};
