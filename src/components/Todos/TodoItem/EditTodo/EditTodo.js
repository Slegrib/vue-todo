import autosize from 'autosize';

export default {
  props: {
    edit: {
      type: Boolean,
      required: true,
    },
    closeEdit: {
      type: Function,
      required: true,
    },
    updateDescription: {
      type: Function,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: this.description,
      originalValue: this.description,
    };
  },
  mounted() {
    autosize(this.$refs.textarea);
    this.$refs.textarea.focus();
  },
  methods: {
    attemptUpdate() {
      if (this.value !== this.originalValue && this.value !== '') {
        this.updateDescription(this.value);
        this.closeEdit();
      }
    },
  },
  computed: {
    addBtn() {
      return {
        width: '25px',
        height: '25px',
        background: '#43cea2',
      };
    },
  },
};
