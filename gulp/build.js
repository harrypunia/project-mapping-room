const gulp = require('gulp');
const htmlMin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const clean = require('gulp-clean-css');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const browserify = require("browserify");
const browserSync = require('browser-sync').create();
// Files
const htmlFiles = './src/*.html';
const scssFiles = './src/scss/**/*.scss';
const jsFiles = ["./src/js/main.js"];
const audioFiles = "./src/audio/**/*";
const imgFiles = "./src/img/**/*";
// Dist
const htmlDest = './dist';
const cssDist = './dist/css';
const jsDist = './dist/js';
const audioDest = "./dist/audio";
const imgDest = "./dist/img";

function html(done) {
  gulp.src(htmlFiles)
    .pipe(htmlMin({collapseWhitespace: true}))
    .pipe(gulp.dest(htmlDest));
  done();
}

function css(done) {
  gulp.src([scssFiles])
    .pipe(sass())
    .on('error', function (err) {
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(concat('main.css'))
    .pipe(clean())
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest(cssDist))
    .pipe(browserSync.stream());
  done();
}

function js(done) {
  jsFiles.map(function (entry) {
    return browserify({
      entries: [entry]
    })
      .transform(babelify, {
        presets: [
          '@babel/preset-env'
        ]
      })
      .bundle()
      .on('error', function (err) {
        console.log(err.toString());
        this.emit('end');
      })
      .pipe(source(entry))
      .pipe(rename({dirname: ''}))
      .pipe(buffer())
      .pipe(gulp.dest(jsDist))
      .pipe(browserSync.stream());
  });
  done();
}

function audio(done) {
  gulp.src(audioFiles).pipe(gulp.dest(audioDest));
  done();
}

function img(done) {
  gulp.src(imgFiles).pipe(gulp.dest(imgDest));
  done();
}

module.exports = {html, css, js, audio, img};