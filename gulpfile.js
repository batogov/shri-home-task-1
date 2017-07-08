'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var browserSync = require("browser-sync");
var dotenv = require('dotenv').config({ path: '.env' });
var tinyPNG = require('gulp-tinypng');

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

gulp.task('compress-images', function() {
    gulp.src('./src/img/**/*.{jpg,jpeg}')
        .pipe(tinyPNG(process.env.TINYPNG_API_KEY))
        .pipe(gulp.dest('./build/img'));
});

gulp.task("main", ["connect", "watch-css"]);