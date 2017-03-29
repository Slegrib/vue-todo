import { mapGetters } from 'vuex';
import TodoInput from './TodoInput/TodoInput.vue';
import TodoItem from './TodoItem/TodoItem.vue';

export default {
  components: {
    'todo-input': TodoInput,
    'todo-item': TodoItem,
  },
  computed: {
    // access the todos from the store using mapGetters
    ...mapGetters({
      todos: 'getTodos',
    }),
  },
};
