/*
  Apply all routes to the express server object here
*/
import catchAll from './catchAll';
import todoData from '../data/todos';
import todos from '../controllers/todos';

const data = {
  todos: todoData,
};
// create the controller for the todos API
const controllers = {
  todos: todos(data.todos),
};

export const serverRoutes = (server) => {
  // Todo API
  server.get('/api/todos', controllers.todos.getAll);
  server.get('/api/todos/:id', controllers.todos.getOne);
  server.post('/api/todos', controllers.todos.create);
  server.put('/api/todos/:id', controllers.todos.update);
  server.delete('/api/todos/:id', controllers.todos.delete);
  /*
    route: /*
    Should be placed at the end of this function. This is the catch all route
    that is used to server side render the vue js SPA
  */
  catchAll(server);
};

export const dataRef = data;
