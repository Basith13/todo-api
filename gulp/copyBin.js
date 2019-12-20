require('dotenv').config();
const gulp = require('gulp');
const path = require('path');
const strip = require('gulp-strip-comments');

gulp.task('copyBin', () => gulp.src(path.join(__dirname, './../src/bin/www'))
    .pipe(strip.text())
    .pipe(gulp.dest(path.join(__dirname, './../build/bin'))));
