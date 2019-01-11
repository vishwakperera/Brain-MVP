const gulp = require('gulp');
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
gulp.task('minify', function(done) {
  gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/javascripts'));
  done();
});
//Optimizr images
gulp.task('imageMin', function(done) {
  gulp.src('assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/images'));
  done();
});
//Compile sass
gulp.task('sass', function(done) {
  gulp.src('assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/stylesheets'));
  done();
});
//Scripts
gulp.task('scripts', function(done) {
  gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/javascripts'));
  done();
});
// gulp.task('default', gulp.series('imageMin', 'sass', 'scripts', function(done) {
//   // default task code here
//   done();
// }));
gulp.task('watch', function() {
  gulp.watch('assets/js/*.js', gulp.series('scripts'));
  gulp.watch('assets/images/*', gulp.series('imageMin'));
  gulp.watch('assets/sass/*.sass', gulp.series('sass'));
  gulp.watch('assets/*.html', gulp.series('copyHtml'));
});