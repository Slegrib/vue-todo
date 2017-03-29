import fs from 'fs';
import path from 'path';
import { createBundleRenderer } from 'vue-server-renderer';

export default ()=> {
  const projectRoot = path.resolve(__dirname, '../../');
  const filePath = path.join(projectRoot, 'dist/bundle.server.js');
  const code = fs.readFileSync(filePath, 'utf8');

  const bundleRenderer = createBundleRenderer(code);
  return bundleRenderer;
};
