const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require("gulp-javascript-obfuscator");
// Files
const imgFiles = "./src/img/**/*";
// Dist
const imgDist = './dist/img';

function deployJs(done) {
  gulp.src("./server/public/js/main.js")
    .pipe(uglify({
      compress: {
        dead_code: true
      }
    }))
    .pipe(obfuscate())
    .on("error", function (err) {
      console.log(err.toString());
    })
    .pipe(gulp.dest('./dist/js'));
  done();
}

function deployImg(done) {
  gulp.src(imgFiles)
    .pipe(imageMin([
      imageMin.optipng({optimizationLevel: 3}),
      imageMin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ], {
      verbose: true
    }))
    .pipe(gulp.dest(imgDist));
  done();
}

module.exports = {deployJs, deployImg};