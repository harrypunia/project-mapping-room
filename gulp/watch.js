const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const htmlFiles = './src/*.html';
const scssFiles = './src/scss/**/*.scss';
// GulpFiles
const {html, css, js} = require("./build");

function browser_sync() {
  browserSync.init({
    port: 8080,
    server: {
      baseDir: "./dist/"
    },
    browser: "google chrome"
  });
}

function reload(done) {
  browserSync.reload();
  done();
}

function watch_files() {
  gulp.watch(htmlFiles, gulp.series(html, reload));
  gulp.watch(scssFiles, css);
  gulp.watch('./src/js/**/*.js', gulp.series(js, html, reload));
}

module.exports = {browser_sync, watch_files};