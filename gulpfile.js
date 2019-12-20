const dotenv = require('dotenv');
const gulp = require('gulp');

require('./gulp/buildApp');
require('./gulp/buildCore');
require('./gulp/clean');
require('./gulp/copyBin');

dotenv.config();

process.env.NODE_ENV = process.argv.includes('--prod') ? 'prod' : 'dev';

gulp.task('build', gulp.series('buildApp', 'buildCore', 'copyBin'));
gulp.task('watch', () => {
    gulp.watch('src/**', gulp.series('buildApp', 'buildCore', 'copyBin'));
});
