const gulp = require('gulp');
// GulFiles
const {deployJs, deployImg} = require("./gulp/deploy");
const {html, css, js, audio, img} = require("./gulp/build");
const {browser_sync, watch_files} = require("./gulp/watch");

gulp.task("build", gulp.parallel(html, css, js, audio, img));
gulp.task("deploy", gulp.parallel(html, css, deployJs, audio, deployImg));
gulp.task('develop', gulp.parallel(html, css, js, audio, img, watch_files, browser_sync));