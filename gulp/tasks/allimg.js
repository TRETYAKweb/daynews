module.exports = () => {
  $.gulp.task('allimg', () => {
    return $.gulp.src('./src/images/*.{jpg,png,svg}')
        .pipe($.gulp.dest('./build/images'));
  });
};
