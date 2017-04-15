import { mapGetters } from 'vuex';
import TodoInput from './TodoInput/TodoInput.vue';
import TodoItem from './TodoItem/TodoItem.vue';

export default {
  components: {
    'todo-input': TodoInput,
    'todo-item': TodoItem,
  },
  computed: {
    // map the todos from vuex
    ...mapGetters({
      todos: 'getTodos',
    }),
  },
};
