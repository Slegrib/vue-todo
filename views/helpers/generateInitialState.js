export default (context) => {
  const initialState = context.initialState || 'initial state';
  return `<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>`;
};
