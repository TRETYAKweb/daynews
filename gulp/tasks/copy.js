module.exports = () => {
  $.gulp.task('copy', () => {
    return $.gulp.src([
        './src/fonts/**/*.{woff,woff2}',
        './src/img/**',
        './src/*.html',
    ], {base: './src'})
        .pipe($.gulp.dest('./build'));
  });
};
