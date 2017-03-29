import webpack from 'webpack';
const path = require('path');
// root of the project folder
const projectRoot = path.resolve(__dirname, '..');
// path in which webpack will put the build
const outputPath = path.join(projectRoot, 'dist');
// import the base webpack config
import webpackBase from './webpack.base.js';
const config = webpackBase();

config.target = 'node';
config.entry = {
  'skadii': [path.join(projectRoot, 'src/serverEntry.js')],
};

config.output = {
  libraryTarget: 'commonjs2', // !different
  path: outputPath,
  filename: 'bundle.server.js',
};

// add plugins to minize code and to optomize
config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
);

export default config;
// module.exports = {
//   target: 'node', // !different
//   entry: path.join(projectRoot, 'src/serverEntry.js'),
//   output: {
//     libraryTarget: 'commonjs2', // !different
//     path: path.join(projectRoot, 'dist'),
//     filename: 'bundle.server.js',
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.vue$/,
//         loader: 'vue',
//       },
//       {
//         test: /\.js$/,
//         loader: 'babel',
//         include: projectRoot,
//         exclude: /node_modules/,
//       },
//     ],
//   },
// };
