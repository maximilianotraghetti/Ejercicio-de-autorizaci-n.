import { database } from "../db/database.js";

export const getAllTodosCtrl = (req, res) => {
  const todos = database.todos.filter((todo) => todo.owner === req.user.id);

  res.json({ todos });
};

export const deleteTodoCtrl = (req, res) => {
  const { id } = req.params;

  const index = database.todos.findIndex((todo) => todo.id === +id);

  if (index === -1) {
    return res.status(404).json({ message: "Todo no encontrado" });
  }

  database.todos.splice(index, 1);

  res.json({ message: "Todo eliminado" });
};

export const createTodoCtrl = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Falta el título" });
  }

  const newTodo = {
    id: database.todos.length + 1,
    title,
    completed: false,
    owner: req.user.id,
  };

  database.todos.push(newTodo);

  res.status(201).json({ message: "Todo creado", todo: newTodo });
};
