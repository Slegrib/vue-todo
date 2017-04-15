import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import store from '../vuex/store';
import App from './App.vue';
import router from '../routes/clientRoutes';
import sharedAttr from './sharedAttr';

// sync the store to vue router
sync(store, router);

// The application component that will be mounted to the div with id "root"
export default new Vue({
  name: 'ClientApp',
  router,
  store,
  ...App,
  metaInfo: sharedAttr.metaInfo,
  components: sharedAttr.components,
  data() {
    return {
      // set this to false to remove the loading screen
      loading: true,
    };
  },
  mounted() {
    // once the app has rendered turn off the loading screen
    this.loading = false;
  },
});
