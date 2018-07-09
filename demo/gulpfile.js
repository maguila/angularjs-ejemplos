var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var inject = require('gulp-inject');
var clean = require('gulp-clean');


gulp.task('clean', function () {
    return gulp.src('./build/*', {read: false})
        .pipe(clean());
});

gulp.task('js', function(){
  return gulp.src('app/js/*.js')
    .pipe(gulp.dest('build/js'))
});

gulp.task('html', function(){
    return gulp.src('app/index.html')
      .pipe(gulp.dest('build/'))
});

gulp.task('css', function(){
    return gulp.src('app/css/*.css')
      .pipe(gulp.dest('./build/css'))
});

gulp.task('bower', function () {

    var bowers = [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-animate/angular-animate.min.js',
                    'bower_components/angular-aria/angular-aria.min.js',
                    'bower_components/angular-messages/angular-messages.min.js',
                 ];

    return gulp.src(bowers)
        .pipe(gulp.dest('./build/js/vendor'));
});

gulp.task('index', function () {
    var target = gulp.src('./app/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['build/css/*.css'], {read: false});
   
    return target.pipe(inject(sources,{relative:true, addRootSlash:false, ignorePath:'../build/'}))
      .pipe(gulp.dest('./build'));
});

gulp.task('bower-js', function () {
    var target = gulp.src('./app/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['build/js/vendor/*.js'], {read: false});
   
    return target.pipe(inject(sources,{relative:true, addRootSlash:false, ignorePath:'../build/'}))
      .pipe(gulp.dest('./build'));
});

gulp.task('default', gulp.series(['clean','js','html','css','bower','index','bower-js'], function() { 
    // default task code here
    console.log("exitoso!!!");
    
}));