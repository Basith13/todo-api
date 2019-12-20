const gulp = require('gulp');
const { exec } = require('child_process');

gulp.task('clean', (done) => {
    exec('del -rf build', (err, stdout, stderr) => {
        if (err) {
            console.log(stdout);
            return done(err);
        }
        return done();
    });
});
