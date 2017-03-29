import path from 'path';
import webpack from 'webpack';
import baseConfig from './webpack.base.js';
const projectRoot = path.resolve(__dirname, '..');

const config = baseConfig();
// import serverConfig from './config/serverConfig';
// const projectRoot = path.resolve(__dirname, '..');
// const outputPath = path.join(projectRoot, 'dist');
config.target = 'node';
config.entry = {
  'skadii': ['../src/serverEntry.js'],
};
/*
 * The combination of path and filename tells Webpack what name to give to
 * the final bundled JavaScript file and where to store this file.
 */
config.output = {
  // libraryTarget: 'commonjs2',
  libraryTarget: 'commonjs2',
  path: path.join(projectRoot, 'dist'),
  filename: 'bundle.server.js',
};

// push hot reload plugins
config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin()
);

config.module.loaders.push(
  {
    test: /\.scss$/,
    loaders: ['style', 'css', 'sass'],
  }
);

// for the dev server we should externalize modules for performance
config.externals = Object.keys(require('../package.json').dependencies);

export default config;

// var ClosureCompilerPlugin = require('webpack-closure-compiler');
// export default {
//   /*
//    * app.ts represents the entry point to your web application. Webpack will
//    * recursively go through every "require" statement in app.ts and
//    * efficiently build out the application's dependency tree.
//    */
//   entry: ['./src/serverEntry.js'],
//   target: 'node',
//   /*
//    * The combination of path and filename tells Webpack what name to give to
//    * the final bundled JavaScript file and where to store this file.
//    */
//   output: {
//     libraryTarget: 'commonjs2',
//     path: path.resolve(__dirname, 'serverAssets'),
//     filename: 'ssr-bundle.js',
//   },
//   // this will externalize all modules listed under "dependencies"
//   // in your package.json
//   externals: Object.keys(require('./package.json').dependencies),
//   /*
//    * resolve lets Webpack now in advance what file extensions you plan on
//    * "require"ing into the web application, and allows you to drop them
//    * in your code.
//    */
//   resolve: {
//     extensions: ['', '.vue', '.js'],
//     alias: {
//       vue: 'vue/dist/vue.js',
//     },
//   },
//   /*
//     For SSR we need to externalize all modules listed under "dependencies"
//     in the package.json file
//   */
//   // externals: Object.keys(require('./package.json').dependencies),
//   module: {
//     /*
//      * Each loader needs an associated Regex test that goes through each
//      * of the files you've included (or in this case, all files but the
//      * ones in the excluded directories) and finds all files that pass
//      * the test. Then it will apply the loader to that file. I haven't
//      * installed ts-loader yet, but will do that shortly.
//      */
//     loaders: [
//       {
//         test: /\.js$/,
//         loader: 'babel',
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.vue$/,
//         loader: 'vue',
//         exclude: /node_modules/,
//       },
//     ],
//   },
// };
