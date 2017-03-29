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
  computed: {
    todoInput() {
      return {
        background: 'none',
        border: 'none',
        borderBottom: '1px solid rgba(255,255,255, 0.60)',
        height: '40px',
        color: 'white',
        fontSize: '1.5em',
        fontFamily: 'aileronthin',
        paddingRight: '36px',
      };
    },
    addBtn() {
      return {
        width: '25px',
        height: '25px',
        background: '#43cea2',
      };
    },
  },
};
