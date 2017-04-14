export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    handleSubmit() {
      if (this.value.length > 0) {
        this.$store.dispatch('createTodo', { description: this.value, component: this });
      }
    },
  },
};
