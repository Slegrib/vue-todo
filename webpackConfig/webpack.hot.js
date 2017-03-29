import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
// the packages that will be bundled into the vendor file
import commonConfig from './common.config.js';
import serverConfig from '../config';

const hotPort = serverConfig.hot;

const path = require('path');
// get the root of the project
const projectRoot = path.resolve(__dirname, '..');

// import the base webpack config
import webpackBase from './webpack.base.js';
const config = webpackBase();

// entrypoint for webpack to start bundling
config.entry = {
  // 'common': commonConfig,
  'skadii': [
    '../src/clientEntry.js',
    `webpack-dev-server/client?http://localhost:${hotPort}`,
    'webpack/hot/only-dev-server',
  ],
};

// destination for webpack bundle
config.output = {
  path: path.resolve(__dirname, 'public/dist'),
  filename: 'bundle.js',
  publicPath: `http://localhost:${hotPort}/dist`,
};

config.module.loaders.push({
  test: /\.scss$/,
  loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
  // loader: ExtractTextPlugin.extract(
  //   'style',
  //   'css!sass'),
});

// add plugins to minize code and to optimize
config.plugins.push(
  new webpack.optimize.DedupePlugin(),
  new webpack.HotModuleReplacementPlugin(),
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'common',
  //   minChunks: Infinity,
  // }),
  new webpack.optimize.OccurenceOrderPlugin(),
);

config.devtool = 'eval-source-map';

// export the config
export default config;


// import path from 'path';
// import webpack from 'webpack';
// import serverConfig from './config/serverConfig';
// const hotPort = serverConfig.hotPort;
// const sharedConfig = require('./shared.config.js');
// import baseConfig from './webpack.base.js';
// const config = baseConfig();
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// /*
//  * The combination of path and filename tells Webpack what name to give to
//  * the final bundled JavaScript file and where to store this file.
//  */
// config.output = {
//   // libraryTarget: 'commonjs2',
//   filename: '[name].js',
//   path: path.resolve(__dirname, 'public/assets'),
//   chunkFilename: '[id]-split.js',
//   publicPath: `http://localhost:${hotPort}/assets/`, // public paths for the chunks that are created
// };
//
// config.entry = {
//   'shared': sharedConfig,
//   'gamii-retail': [
//     './src/clientEntry.js',
//     `webpack-dev-server/client?http://localhost:${hotPort}`,
//     'webpack/hot/only-dev-server',
//   ],
// };
//
// config.module.loaders.push(
//   /*
//    * Each loader needs an associated Regex test that goes through each
//    * of the files you've included (or in this case, all files but the
//    * ones in the excluded directories) and finds all files that pass
//    * the test. Then it will apply the loader to that file. I haven't
//    * installed ts-loader yet, but will do that shortly.
//    */
//   {
//     test: /\.js$/,
//     loaders: ['babel'],
//     exclude: /node_modules/,
//   },
//   {
//     test: /\.vue$/,
//     loader: 'vue-loader',
//     exclude: /node_modules/,
//   },
//   {
//     test: /\.scss$/,
//     // loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap'),
//     loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
//   }
// );
//
// // push hot reload plugins
// config.plugins.push(
//   new webpack.optimize.DedupePlugin(),
//   new webpack.optimize.OccurenceOrderPlugin(),
//   new webpack.HotModuleReplacementPlugin(),
//   new webpack.NoErrorsPlugin(),
//   // new ExtractTextPlugin('gamii.css', { allChunks: false }),
//   new webpack.optimize.CommonsChunkPlugin({
//     // This name 'vendor' ties into the entry definition
//     name: 'shared',
//     // We don't want the default vendor.js name
//     filename: 'shared.js',
//     // Passing Infinity just creates the commons chunk, but moves no modules into it.
//     // In other words, we only put what's in the vendor entry definition in vendor-bundle.js
//     minChunks: Infinity,
//   })
// );
//
// config.devtool = 'eval-source-map';
//
// export default config;
