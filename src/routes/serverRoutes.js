import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';
import Landing from '../containers/Landing/Landing.vue';

// Prepare vue plugins
Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
  { path: '/', component: Landing },
];


// Create the vue router for the server
export default new VueRouter({
  mode: 'abstract',
  routes,
});
