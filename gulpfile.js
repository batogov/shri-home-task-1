'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var browserSync = require("browser-sync");
var reload = browserSync.reload;

var config = {
    server: {
        baseDir: "./"
    },
    tunnel: "shri1",
    host: "localhost",
    port: 8080,
    logPrefix: "shri1"
};

gulp.task("connect", function () {
    browserSync(config);
});

gulp.task('build-css', function() {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('watch-css', function() {
    gulp.watch('./src/scss/**/*.scss', ['build-css']);
});

gulp.task("watch", ["connect", "watch-css"]);