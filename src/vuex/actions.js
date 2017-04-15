import request from 'axios';

/*
  About actions.js
  The actions used by vuex in order to communicate with the server. I am using
  axios as our promise based HTTP client of choice. One should only commit
  changes to the client side vuex store when the server sends a response of 200.
  Never update the vuex store without using the commit function.
*/

// the name space of the todos api
const api = '/api/todos/';

/*
  Get all the todos from the server then commit them to the vuex store. Mainly
  used to get the initial todos from the server when the app loads. Since we are
  hydrating this data already this may not be nessesary to use.
*/
export const getTodos = function (commit) {
  return request.get('/api/todos').then((response) => {
    if (response.statusText === 'OK') {
      commit('TODOS_LIST', response.data);
    }
  }).catch((error) => {
    console.log(error);
  });
};

/*
  Updates a todo on the server. Must provide the entire new state of the updated
  todo. It will replace the todo given an id.
*/
export const updateTodo = function ({ commit, state }, todo) {
  const requestUrl = `${api}${todo.id}`;
  return request.put(requestUrl, todo).then((response) => {
    if (response.status === 200) {
      commit('UPDATE_TODO', response.data);
    }
  }).catch((error) => {
    console.log(error);
  });
};

/*
  Provided an id removes the todo from the list after the server responds
*/
export const deleteTodo = function ({ commit, state }, deleteInfo) {
  const requestUrl = `${api}${deleteInfo.id}`;
  return request.delete(requestUrl).then((response) => {
    if (response.status === 200) {
      commit('DELETE_TODO', deleteInfo.index);
    }
  }).catch((error) => {
    console.log(error);
  });
};

/*
  create a new todo item and push it to the client side vuex store
*/
export const createTodo = function ({ commit, state }, createInfo) {
  return request.post(api, { description: createInfo.description }).then((response) => {
    if (response.status === 200) {
      console.log(response.data.id);
      const commitInfo = {
        todo: response.data,
        component: createInfo.component,
      };
      commit('CREATE_TODO', commitInfo);
    }
  }).catch((error) => {
    console.log(error);
  });
};
