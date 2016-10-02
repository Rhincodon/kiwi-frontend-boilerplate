const config = require('config');

module.exports = function() {
    this.opts.browserSync.init({
        server: {
            baseDir: config.get('html.targetDir')
        }
    });

    this.gulp.watch([
        `${config.get('js.sourceDir')}/**/*.js`,
        `${config.get('js.sourceDir')}/**/*.vue`
    ], ['js']);
    this.gulp.watch(`${config.get('css.sourceDir')}/**/*.css`, ['css']);
    this.gulp.watch(`${config.get('stylus.sourceDir')}/**/*.styl`, ['styles']);
    this.gulp.watch(`${config.get('html.sourceDir')}/**/*.html`, ['fileinclude']);
    this.gulp.watch(`${config.get('html.targetDir')}/*.html`).on('change', this.opts.browserSync.reload);
    this.gulp.watch(`${config.get('js.targetDir')}/*.js`).on('change', this.opts.browserSync.reload);
};