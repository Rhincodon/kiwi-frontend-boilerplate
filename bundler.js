const config = require('config');
const browserify = require('browserify');
const babelify = require('babelify');
const vueify = require('vueify');
const envify = require('envify');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const watchify = require('watchify');
const notify = require('gulp-notify');
const fs = require('fs');

let customOpts = {
    entries: [`${config.get("js.sourceDir")}/bootstrap.js`],
    debug: false,
    cache: {},
    packageCache: {}
};

let b = browserify(customOpts);
b.plugin(watchify)

b.transform(babelify);
b.transform(vueify);
b.transform(envify, {global: true, _: 'purge'});

module.exports = function(gulp) {
    return {
        b: b,
        bundle() {
            return b.bundle()
                .pipe(fs.createWriteStream(config.get('js.targetDir') + '/app.js'));
        }
    }
};