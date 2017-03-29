import fs from 'fs';
import path from 'path';
// root of the project folder
const projectRoot = path.resolve(__dirname, '../../');
const manifestPath = path.join(projectRoot, 'public/dist/manifest.json');
// read the file using node's built in file system
const manifestJSON = fs.readFileSync(manifestPath, 'utf8');
// parse the manifest to use when importing client side javascript files
const manifest = JSON.parse(manifestJSON);

export default manifest;
