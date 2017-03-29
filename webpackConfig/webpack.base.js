import path from 'path';
import webpack from 'webpack';
import ManifestPlugin from 'webpack-manifest-plugin';

const projectRoot = path.resolve(__dirname, '..');
const appSrc = path.join(projectRoot, 'src');
const NODE_ENV = process.env.NODE_ENV;

export default () => { return {
  context: appSrc,
  /*
   * resolve lets Webpack now in advance what file extensions you plan on
   * "require"ing into the web application, and allows you to drop them
   * in your code.
   */
  resolve: {
    root: appSrc,
    extensions: ['', '.vue', '.js', '.json'],
    alias: {
      vue: 'vue/dist/vue.common.js',
    },
  },
  /*
    For SSR we need to externalize all modules listed under "dependencies"
    in the package.json file
  */
  // externals: Object.keys(require('./package.json').dependencies),
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        // include: projectRoot,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
      // TRACE_TURBOLINKS: devBuild,
    }),
  ],
}};
