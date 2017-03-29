import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../../webpackConfig/webpack.server.dev.babel.js';
import { createBundleRenderer } from 'vue-server-renderer';

const serverBundleCompiler = webpack(webpackConfig);
const MFS = require('memory-fs');
const mfs = new MFS();

let bundleRenderer;
serverBundleCompiler.outputFileSystem = mfs;
serverBundleCompiler.watch({}, (err, stats)=> {
  if (err) {throw err;}
  console.log('');
  console.log('🔥 recompiling server bundle 🔥');
  console.log('');
  const webpackStats = stats.toJson();
  webpackStats.errors.forEach(error => console.error(error));
  webpackStats.warnings.forEach(error => console.warn(error));
  const bundlePath = path.resolve(process.cwd(), 'dist/bundle.server.js');
  bundleRenderer = createBundleRenderer(mfs.readFileSync(bundlePath, 'utf-8'));
});
module.export = bundleRenderer;
