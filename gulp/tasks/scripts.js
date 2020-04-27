/* global global module */

const webpackConfig = {
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  mode: 'production',
  devtool: 'cheap-module-eval-source-map',
};

module.exports = () => {
  global.$.gulp.task('scripts', () => {
    return global.$.gulp.src('./src/js/**/*.js')
        .pipe(global.$.gp.plumber())
        .pipe(global.$.webpackStream(webpackConfig))
        .pipe(global.$.gulp.dest('build/js'))
        .pipe(global.$.browserSync.stream());
  });
};
