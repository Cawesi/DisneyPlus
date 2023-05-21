const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/style/'));
}

function images(){
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function comprimirjs() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
}

exports.default = gulp.parallel(styles, images, comprimirjs)

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles, comprimirjs))
}