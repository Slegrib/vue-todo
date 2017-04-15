import Vue from 'vue';
import Meta from 'vue-meta';
import VueRouter from 'vue-router';
import Landing from '../containers/Landing/Landing.vue';

// Prepare vue plugins
Vue.use(VueRouter);
Vue.use(Meta);

// define the routes in your application
const routes = [
  { path: '/', component: Landing },
];


// Create the vue router for the server
export default new VueRouter({
  mode: 'abstract', // for server side rendering we need to set this to abstract
  routes,           // set the routes
});
