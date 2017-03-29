import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';
import Landing from '../containers/Landing/Landing.vue';

Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
  { path: '/', component: Landing },
];

export default new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, scrollPosition) {
    if (scrollPosition) {
      return scrollPosition;
    }
    return {
      y: 0,
    };
  },
  routes, // short for routes: routes
});
