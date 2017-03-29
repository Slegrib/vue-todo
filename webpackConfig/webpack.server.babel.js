/* eslint no-var: 0, no-console: 0 */

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import webpackConfig from './webpack.hot.js';
import serverConfig from '../config';

const hotPort = serverConfig.hot;
const compiler = webpack(webpackConfig);

const devServer = new WebpackDevServer(compiler, {
  contentBase: `http://localhost:${hotPort}`,
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  lazy: false,
  stats: {
    colors: true,
    hash: false,
    version: false,
    chunks: false,
    children: false,
  },
});

devServer.listen(hotPort, 'localhost', err => {
  if (err) console.error(err);
  console.log(
    `=> 🔥  Webpack development server is running on port ${hotPort}`
  );
});
