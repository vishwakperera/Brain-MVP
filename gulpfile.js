//const gulp = require('gulp');


const { src,dest,watch,series,parallel } = require('gulp');

const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const ext_replace = require('gulp-ext-replace');





/*
~~ FLASH TIPS - MAIN TASKS ~~
gulp.task - Define task
gulp.src - Point to file to use
gulp.dest - Point to folder to output
gulp.watch - Watch files and folders for changes
*/

//Minify js
function minify(done) {
  src('assets/js/*.js')
    .pipe(uglify())
    .pipe(dest('public/javascripts'));
  done();
};

//Optimizr images
function imageMin(done) {
  src('assets/images/*')
    .pipe(imagemin())
    .pipe(dest('public/images'));
  done();
};
//Compile sass
function scss(done) {
  src('assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('public/stylesheets'));
  done();
};
//Scripts
function scripts(done) {
  src('assets/js/*.js')
    .pipe(uglify())
    .pipe(dest('public/javascripts'));
  done();
};



function watchTask(){
  watch('assets/js/*.js', scripts);
  watch('assets/images/*', imageMin);
  watch('assets/sass/*.sass', scss);
  //watch('assets/*.html', copyHtml);
}

exports.default = series(
  parallel(
    scss,
    scripts,
    imageMin
  ),
  minify,
  watchTask
);

// gulp.task('default', gulp.series('imageMin', 'sass', 'scripts', function(done) {
//   // default task code here
//   done();
// }));
