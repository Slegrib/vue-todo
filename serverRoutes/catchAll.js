// catch all route for the single page application
import renderApp from '../views';

export default (server) => {
  server.get('*', renderApp);
};
