import { database } from "../db/database.js";

export const getAllTodosCtrl = (req, res) => {
  const todos = database.todos.filter((todo) => todo.owner === req.user.id);

  res.json({ todos });
};

export const createTodosUserCtrlo = (req, res) => {
  const { title } = req.body;
  const newTodo = {
    id: database.todos.length + 1,
    title,
    completed: false,
    owner: req.user.id,
  };

  database.todos.push(newTodo);

  res.json({ todo: newTodo });
};
