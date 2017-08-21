const config = require('config');
const browserify = require('browserify');
const babelify = require('babelify');
const vueify = require('vueify');
const aliasify = require('aliasify');
const envify = require('envify');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const watchify = require('watchify');
const assign = require('lodash.assign');
const notify = require('gulp-notify');

let customOpts = {
    entries: `${config.get("js.sourceDir")}/bootstrap.js`,
    debug: false,
};
let opts = assign({}, watchify.args, customOpts);
let b = watchify(browserify(opts));

b.transform(babelify);
b.transform(vueify);
b.transform(aliasify);
b.transform(envify);

module.exports = function(gulp) {
    return {
        b: b,
        bundle() {
            return b.bundle()
                .pipe(source(`bootstrap.js`))
                .pipe(rename('app.js'))
                .pipe(gulp.dest(config.get('js.targetDir')))
                .pipe(notify('JS Compiled'));
        }
    }
};