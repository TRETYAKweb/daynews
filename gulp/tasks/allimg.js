module.exports = () => {
  $.gulp.task('allimg', () => {
    return $.gulp.src('./src/img/**/*.{jpg,png,svg}')
        .pipe($.gulp.dest('./build/img'));
  });
};
