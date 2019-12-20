require('dotenv').config();
const gulp = require('gulp');
const path = require('path');
const strip = require('gulp-strip-comments');

gulp.task('buildCore', () => gulp.src(path.join(__dirname, './../src/**/**/**/*.js'))
    .pipe(strip())
    .pipe(gulp.dest(path.join(__dirname, './../build'))));
