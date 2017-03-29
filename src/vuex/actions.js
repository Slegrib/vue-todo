import request from 'axios';

export const getTodos = ({ commit, state }) => {
  return request.get('/api/todos').then((response) => {
    if (response.statusText === 'OK') {
      commit('TODOS_LIST', response.data);
    }
  }).catch((error) => {
    console.log(error);
  });
};

export const updateTodo = ({ commit, state }, todo) => {
  return request.put('/api/todos/' + todo.id, todo).then((response) => {
    if (response.status === 200) {
      commit('UPDATE_TODO', response.data);
    }
  }).catch((error) => {
    console.log(error);
  });
};

export const deleteTodo = ({ commit, state }, deleteInfo) => {
  return request.delete('/api/todos/' + deleteInfo.id).then((response) => {
    if (response.status === 200) {
      commit('DELETE_TODO', deleteInfo.index);
    }
  }).catch((error) => {
    console.log(error);
  });
};

export const createTodo = ({ commit, state }, createInfo) => {
  return request.post('/api/todos/', { description: createInfo.description }).then((response) => {
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
