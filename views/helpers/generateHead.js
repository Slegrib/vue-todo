import generateInitialState from './generateInitialState';
import manifest from './getManifest';
// import config from '../../config';
// const hotPort = config.hot;
const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === 'production';

const cssBundle = isProd ? `<link rel="stylesheet" type="text/css" href=${manifest['/dist/bundle.css']}>` : '';
const commonBundle = isProd ? `<script src=${manifest['/dist/common.js']} charset="utf-8"></script>` : '';

export default (res, context) => {
  // get the seo tag attributes from vue-meta
  const {
    title, htmlAttrs, bodyAttrs, link, style, script, noscript, meta,
  } = context.meta.inject();

  // console.log(`incoming request ${context.url}`);
  // generate the Html head tags ans ish
  const htmlHead =
`
<html data-vue-meta-server-rendered ${htmlAttrs.text()}>
  <head>
    ${cssBundle}
    ${commonBundle}
    ${title.text()}
    ${meta.text()}
    ${link.text()}
    ${style.text()}
    ${script.text()}
    ${noscript.text()}
    ${generateInitialState(context)}
  </head>
<body ${bodyAttrs.text()}>
`;
  res.write(htmlHead);
};
