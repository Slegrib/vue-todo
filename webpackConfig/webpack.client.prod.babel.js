import webpack from 'webpack';
import ManifestPlugin from 'webpack-manifest-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
// the packages that will be bundled into the vendor file
import commonConfig from './common.config.js';

const path = require('path');
// get the root of the project
const projectRoot = path.resolve(__dirname, '..');

// import the base webpack config
import webpackBase from './webpack.base.js';
const config = webpackBase();

// entrypoint for webpack to start bundling
config.entry = {
  'bundle': [path.join(projectRoot, 'src/clientEntry.js')],
  'common': commonConfig,
};

// destination for webpack bundle
config.output = {
  path: path.join(projectRoot, 'public/dist'),
  filename: 'bundle.[chunkhash].js',
};

config.module.loaders.push({
  test: /\.scss$/,
  // loaders: ['style-loader', 'css-loader', 'sass-loader'],
  loader: ExtractTextPlugin.extract(
    'style',
    'css!sass'),
});

// add plugins to minize code and to optimize
config.plugins.push(
  new WebpackMd5Hash(),
  new ManifestPlugin({
    fileName: 'manifest.json',
    basePath: '/dist/',
  }),
  new ExtractTextPlugin('bundle.[chunkhash].css'),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    minChunks: Infinity,
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
);

// export the config
export default config;
