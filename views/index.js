// import fs from 'fs';
import path from 'path';
import { createBundleRenderer } from 'vue-server-renderer';
import generateHead from './helpers/generateHead';
import generateClosingTags from './helpers/generateClosingTags';
import getProductionBundle from './helpers/getProductionBundle';
import webpackConfig from '../webpackConfig/webpack.server.dev.babel';
import { dataRef } from '../serverRoutes/';
// import getDevBundle from './helpers/getDevBundle.js';

const NODE_ENV = process.env.NODE_ENV;
// this is the Vue bundleRenderer that is set depending on the node env
let bundleRenderer;
if (NODE_ENV === 'production') {
  bundleRenderer = getProductionBundle();
} else {
  const webpack = require('webpack');
  const serverBundleCompiler = webpack(webpackConfig);
  const MFS = require('memory-fs');
  const mfs = new MFS();
  serverBundleCompiler.outputFileSystem = mfs;
  serverBundleCompiler.watch({}, (err, stats) => {
    if (err) { throw err; }
    console.log('');
    console.log('🔥 recompiling server bundle 🔥');
    console.log('');
    const webpackStats = stats.toJson();
    webpackStats.errors.forEach(error => console.error(error));
    webpackStats.warnings.forEach(error => console.warn(error));
    const bundlePath = path.resolve(process.cwd(), 'dist/bundle.server.js');
    bundleRenderer = createBundleRenderer(mfs.readFileSync(bundlePath, 'utf-8'));
  });
}
// const bundleRenderer = require('vue-server-renderer').createBundleRenderer(code)

export default (req, res) => {
  const context = { url: req.url };
  context.initialState = dataRef.todos;
  const stream = bundleRenderer.renderToStream(context);

  stream.once('data', () => {
    generateHead(res, context);
  });
  // write the ServerApp chunks
  stream.on('data', (chunk) => {
    res.write(chunk);
  });

  stream.on('end', () => {
    generateClosingTags(res, context);
  });

  // incase of a stream error
  stream.on('error', error => res.status(500).end(`<pre>${error.stack}</pre>`));
  // res.send('it worked');
};
