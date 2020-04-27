module.exports = () => {
  $.gulp.task('html', () => {
    return $.gulp.src('./src/*.html')
        .pipe($.gulp.dest('./build'))
        .on('end', $.browserSync.reload);
  });
};
