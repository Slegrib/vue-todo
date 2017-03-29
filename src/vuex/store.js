import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'underscore';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

const defaultState = {
  todos: [],
};

const inBrowser = typeof window !== 'undefined';

const state = (inBrowser && window.__INITIAL_STATE__) || defaultState;

const updateTodoKeys = (index, storeState, todo) => {
  Object.keys(todo).forEach((key) => {
    storeState.todos[index][key] = todo[key];
  });
};

const mutations = {
  TODOS_LIST: (storeState, todos) => {
    storeState.todos = todos;
  },
  UPDATE_TODO: (storeState, todo) => {
    const index = _.findIndex(storeState.todos, { id: todo.id });
    updateTodoKeys(index, storeState, todo);
  },
  DELETE_TODO: (storeState, index) => {
    storeState.todos.splice(index, 1);
  },
  CREATE_TODO: (storeState, commitInfo) => {
    // put the new todo at the top of the list
    storeState.todos.unshift(commitInfo.todo);
    commitInfo.component.value = '';
  },
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});
