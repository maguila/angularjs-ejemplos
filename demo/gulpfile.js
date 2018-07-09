var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('js', function(){
  return gulp.src('app/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'))
});

gulp.task('default', gulp.series('js', function() { 
    // default task code here
    console.log("exitoso!!!");
}));