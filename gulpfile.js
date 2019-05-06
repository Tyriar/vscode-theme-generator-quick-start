var gulp = require('gulp');
var ts = require('gulp-typescript');
var spawnSync = require('child_process').spawnSync;
var through = require('through2');

function build() {
    return gulp.src('*.ts')
        .pipe(ts())
        .pipe(gulp.dest('.'))
        .pipe(through.obj(function (file, encoding, callback) {
            spawnSync('node', [ file.path ]);
            callback(null, file);
        }));
}

gulp.task(build);
gulp.task('default', gulp.series('build'));
gulp.task('watch', gulp.series('build', function() {
    gulp.watch('*.ts', gulp.series('build'));
}));