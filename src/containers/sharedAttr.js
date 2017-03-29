import LoadingScreen from '../components/LoadingScreen/LoadingScreen.vue';

export default {
  // all titles will be injected into this template
  metaInfo: {
    titleTemplate: 'Todo App',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'stylesheet', href: '/fonts/aileron.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'favicon', src: 'favicon.ico' },
    ],
  },
  components: {
    'loading-screen': LoadingScreen,
  },
};
