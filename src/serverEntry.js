// server-entry.js
// import Vue from 'vue';
import { ServerApp, router, store } from './containers/ServerApp';
// import data from '../data/todos';

const meta = ServerApp.$meta();
// which will receive the context of the render call when rendering on the
// the server
export default (context) => {
  // data pre-fetching
  router.push(context.url);
  // pass in the meta data passed on the route
  context.meta = meta;
  return Promise.all(router.getMatchedComponents().map((component) => {
    if (component.prefetch) {
      // the intial data is passed into context at the initial render
      return store.commit('TODOS_LIST', context.initialState);
      // return component.prefetch(store);
    }
  })).then(() => {
    // set initial store on context
    // the request handler will inline the state in the HTML response.
    context.initialState = store.state;
    return ServerApp;
  });
};
