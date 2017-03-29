import Vue from 'vue';
import App from './App.vue';
import router from '../routes/serverRoutes';
import sharedAttr from './sharedAttr';
import store from '../vuex/store';


const ServerApp = new Vue({
  name: 'ServerApp',
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
});

export { ServerApp, router, store };
