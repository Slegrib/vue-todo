import EditTodo from './EditTodo/EditTodo.vue';

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      hover: false,
      hoverComplete: false,
      textHover: false,
      destroyHover: false,
      edit: false,
      poop: '',
    };
  },
  methods: {
    handleClick(e) {
      // get the data value of the element that was clicked on
      const targetData = e.target.getAttribute('data-destroy');
      if (targetData !== 'true') {
        const updatedTodo = {
          id: this.data.id,
          done: this.data.done,
          description: this.data.description,
        };
        updatedTodo.done = !updatedTodo.done;
        this.$store.dispatch('updateTodo', updatedTodo);
      } else {
        const deleteInfo = {
          id: this.data.id,
          index: this.index,
        };
        this.$store.dispatch('deleteTodo', deleteInfo);
      }
    },
    closeEdit(e) {
      if (!e) {
        this.edit = false;
      } else if (e.target.getAttribute('data-removeedit') === 'true') {
        this.edit = false;
      }
    },
    updateDescription(newDescription) {
      const updatedTodo = {
        id: this.data.id,
        done: this.data.done,
        description: newDescription,
      };
      this.$store.dispatch('updateTodo', updatedTodo);
    },
  },
  computed: {
    // compute the inline styles of many of the elements on the page
    ctn() {
      return {
        padding: '24px 24px 24px 75px',
        background: this.destroyHover ? '#FFEBEE' : 'white',
        borderRadius: '3px',
        fontFamily: 'aileronthin',
        fontSize: '1.1em',
        margin: '12px 0px',
      };
    },
    checkCircle() {
      const borderColor = this.data.done ? '#43cea2' : 'rgba(0,0,0, 0.2)';
      return {
        border: `1px solid ${borderColor}`,
        width: '40px',
        height: '40px',
      };
    },
    checkmark() {
      let color = this.hoverComplete ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0)';
      color = this.destroyHover && !this.data.done ? 'rgba(0,0,0,0)' : color;
      color = this.data.done ? '#43cea2' : color;
      return {
        fontSize: '1.7em',
        color,
      };
    },
    destroy() {
      return {
        color: this.destroyHover ? '#F44336' : 'rgba(0,0,0,0.1)',
        bottom: '5px',
        right: '5px',
      };
    },
    text() {
      let color = this.data.done ? 'rgba(0,0,0,0.4)' : '#333';
      color = this.textHover ? '#2196F3' : color;
      return {
        color,
        textDecoration: this.data.done ? 'line-through' : 'none',
      };
    },
  },
  components: {
    'edit-todo': EditTodo,
  },
};
