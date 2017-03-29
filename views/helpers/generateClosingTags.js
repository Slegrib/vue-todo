import manifest from './getManifest.js';
import config from '../../config';
const hotPort = config.hot;
const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === 'production';

const bundlePath = isProd ? manifest['/dist/bundle.js'] : `http://localhost:${hotPort}/dist/bundle.js`;

const closingTags =
`
  </body>
  <script src=${bundlePath} charset="utf-8"></script>
</html>
`;

export default (res, context)=> {
  res.end(closingTags);
};
