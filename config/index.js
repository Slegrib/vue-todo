import development from './environments/development';
import production from './environments/production';

const config = {
  'development': development,
  'production': production,
};

// export the right config settings depending on the node environment
export default config[process.env.NODE_ENV];
