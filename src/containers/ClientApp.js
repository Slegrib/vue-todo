import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import store from '../vuex/store';
import App from './App.vue';
import router from '../routes/clientRoutes';
import sharedAttr from './sharedAttr';

sync(store, router);

export default new Vue({
  name: 'ClientApp',
  router,
  store,
  ...App,
  metaInfo: sharedAttr.metaInfo,
  components: sharedAttr.components,
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    // once the app has rendered turn off the loading screen
    this.loading = false;
  },
});
