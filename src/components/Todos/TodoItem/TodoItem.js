import EditTodo from './EditTodo/EditTodo.vue';

/*
  The todo item component that represents the todo items.
*/
export default {
  props: {
    // the object that contains the information about the todo
    data: {
      type: Object,
      required: true,
    },
    // index of the todo in the list
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      edit: false,          // is the todo item being edited?
      hoverComplete: false, // is the user hovering over the checkmark?
      destroyHover: false,  // is the user hovering over the destroy todo btn?
    };
  },
  methods: {
    /*
      Handles when the user checks or unchecks a todo item and dispatches
      the event to the api. The vuex store is updated when we recieve a response
      from the server. See src/vuex/actions.js
    */
    handleDone() {
      // create the updated todo object and set the done key to the opposite
      const updatedTodo = {
        id: this.data.id,
        done: !this.data.done,
        description: this.data.description,
      };
      // updatedTodo.done = !updatedTodo.done;
      this.$store.dispatch('updateTodo', updatedTodo);
    },
    /*
      Handles when a user clicks the destroy todo button on the bottom right
      hand corner of the todo item.
    */
    handleDestroy() {
      const deleteInfo = {
        id: this.data.id,
        index: this.index,
      };
      this.$store.dispatch('deleteTodo', deleteInfo);
    },
    /*
      Close the edit modal. This function is passed down to the edit-todo
      component in order to communicate with the state of this component.
    */
    closeEdit(e) {
      // if there is no event that means we called this function internally.
      // i.e. after a user submits an edit to the todo we want to close the modal
      if (!e) {
        this.edit = false;
      } else if (e.target.getAttribute('data-removeedit') === 'true') {
        this.edit = false;
      }
    },
    /*
      Update the description of the todo by creating a new object that represents
      the new state of the todo and send it to the todo api
    */
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
    // computing the style of the checkmark is a little bit too much for css to handle
    checkmark() {
      let color = this.hoverComplete ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0)';
      // color = this.destroyHover && !this.data.done ? 'rgba(0,0,0,0)' : color;
      color = this.data.done ? '#43cea2' : color;
      return {
        fontSize: '1.7em',
        color,
      };
    },
  },
  components: {
    // the modal component used for editing the text of a todo
    'edit-todo': EditTodo,
  },
};
