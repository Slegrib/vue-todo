import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';
import Landing from '../containers/Landing/Landing.vue';

// Prepare vue plugins
Vue.use(VueRouter);
Vue.use(Meta);

// define the routes in your application
const routes = [
  { path: '/', component: Landing },
];

export default new VueRouter({
  mode: 'history',
  /*
    set the scroll behavior of the router to scroll to the top when the route
    changes
  */
  scrollBehavior(to, from, scrollPosition) {
    if (scrollPosition) {
      return scrollPosition;
    }
    return {
      y: 0,
    };
  },
  routes, // short for routes: routes es6 syntax
});
