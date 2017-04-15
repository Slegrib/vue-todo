/*
  This is a loading screen for the app. When the app finishes mounting then the
  top level component sets its state to loading = false. Then unmounts this
  component.
*/
export default {
  props: {
    loading: Boolean,
    required: true,
  },
};
