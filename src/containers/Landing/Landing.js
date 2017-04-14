import Todos from '../../components/Todos/Todos.vue';

// this function would normally be used if
const fetchInitialData = store => store.dispatch('getTodos');

export default {
  // if we had data stored on a database and we were not server side rendering
  // we would run this prefetch function in the mounted() function
  // we could also detect this prefetch request in the serverEntry file durring
  // the server side render
  prefetch: fetchInitialData,
  components: {
    todos: Todos,
  },
};
