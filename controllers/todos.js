import _ from 'underscore';

module.exports = (todos) => {
  const todoAPI = {

    // Gets a list of all the todo items
    getAll: (req, res) => {
      try {
        res.status(200).json(todos);
      } catch (e) {
        res.status(500).send('An error occured while attempting to get all of the todo items');
      }
    },

    // Gets a specific todo item, given a supplied ID
    getOne: (req, res) => {
      let statusCode = 200;
      try {
        if (!req.params.id) {
          statusCode = 500;
          throw new Error('An ID was not supplied');
        }
        const id = parseInt(req.params.id, 10);
        const todo = _.findWhere(todos, { id });
        if (!todo) {
          statusCode = 404;
          throw new Error('A todo with the given ID was not found');
        } else {
          res.status(statusCode).json(todo);
        }
      } catch (e) {
        res.status(statusCode).send(e);
      }
    },

    // Create a new todo object and add it to the list
    create: (req, res) => {
      let statusCode = 200;
      try {
        /*
          get a new ID (would be handled by proepr DB automatically)
          this id will equal infinity if there are no todo items.
          to avoid errors I check if the todos array is empty and restart
          the id count to 1
        */
        let id = Math.max.apply(null, _.pluck(todos, 'id')) + 1;
        if (todos.length === 0) {
          id = 1;
        }
        const todo = {
          id,
          done: req.body.done || false,
          description: req.body.description,
        };

        if (!req.body.description || req.body.description === '') {
          statusCode = 400;
          throw new Error('A valid description must be given');
        }
        // I changes this to unshift to put the todo at the top of the list. I think it looks better
        todos.unshift(todo);
        res.status(statusCode).json(todo);
      } catch (e) {
        res.status(statusCode).send(e);
      }
    },

    // Update a todo, given a supplied ID
    update: (req, res) => {
      let statusCode = 200;
      try {
        if (!req.params.id) {
          statusCode = 500;
          throw new Error('An ID was not supplied');
        }
        const id = parseInt(req.params.id, 10);
        let todo = _.findWhere(todos, { id });
        if (!todo) {
          statusCode = 404;
          throw new Error('A todo with the given ID was not found');
        } else {
          _.map(todos, (t) => {
            if (t === todo) {
              todo = _.extendOwn(t, req.body);
              return todo;
            }
          });
          res.status(statusCode).json(todo);
        }
      } catch (e) {
        res.status(statusCode).send(e);
      }
    },

    // Delete a todo, given a supplied ID
    delete: (req, res) => {
      let statusCode = 200;
      try {
        if (!req.params.id) {
          statusCode = 500;
          throw new Error('An ID was not supplied');
        }
        const id = parseInt(req.params.id, 10);
        const todo = _.findWhere(todos, { id });
        if (!todo) {
          statusCode = 404;
          throw new Error('A todo with the given ID was not found');
        } else {
          todos.splice(todos.indexOf(todo), 1);
          res.status(statusCode).send(true);
        }
      } catch (e) {
        res.status(statusCode).send(e);
      }
    },

  };

  return todoAPI;
};
