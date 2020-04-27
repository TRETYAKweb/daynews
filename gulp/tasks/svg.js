module.exports = () => {
  $.gulp.task('svg', () => {
    return $.gulp.src('./src/images/sprite-svg/*.svg')
      .pipe($.gp.svgmin(() => {
        return { plugins: [{ cleanupIDs: { minify: true } }] };
      }))
      .pipe($.gp.svgstore({ inlineSvg: true }))
      .pipe($.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {xmlMode: true}
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.rename('sprite.svg'))
      .pipe($.gulp.dest('./build/images'));
  });
};
