const config = require('config');
const browserify = require('browserify');
const babelify = require('babelify');
const vueify = require('vueify');
const aliasify = require('aliasify');
const envify = require('envify');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const notify = require('gulp-notify');

module.exports = function () {
    return browserify({
        entries: `${config.get("js.sourceDir")}/bootstrap.js`,
        debug: false,
        transform: [babelify.configure({presets: ['es2015']}), vueify, aliasify, envify]
    }).bundle()
        .pipe(source(`bootstrap.js`))
        .pipe(buffer())
        .pipe(rename('app.js'))
        .pipe(this.gulp.dest(config.get('js.targetDir')))
        .pipe(notify('JS'));
};
