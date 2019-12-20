require('dotenv').config();
const gulp = require('gulp');
const removeCode = require('gulp-remove-code');
const path = require('path');
const strip = require('gulp-strip-comments');

gulp.task('buildApp', () => gulp.src(path.join(__dirname, './../src/app.js'))
    .pipe(removeCode({ serveDocs: (process.env.SERVE_DOCS === 'true'), production: (process.env.NODE_ENV === 'prod') }))
    .pipe(strip())
    .pipe(gulp.dest(path.join(__dirname, './../build'))));
