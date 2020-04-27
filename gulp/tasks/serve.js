module.exports = () => {
  $.gulp.task('serve', () => {
    $.browserSync.init({
      server: './build/'
    });

    $.gulp.watch('./src/sass/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./src/*.html', $.gulp.series('html'));
    $.gulp.watch('./src/js/**/*.js', $.gulp.series('scripts'));
    $.gulp.watch('./src/images/**/*.{png,jpg,svg}', $.gulp.series(['svg', 'allimg']));
  })
};
