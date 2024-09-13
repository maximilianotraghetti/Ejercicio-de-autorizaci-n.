import { Router } from "express";
import {
  getAllTodosCtrl,
  deleteTodoCtrl,
  createTodoCtrl,
} from "../controllers/todos.controllers.js";
import validarJwt from "../middlewares/validar-jwt.js";

const todosRouter = Router();

todosRouter.get("/", validarJwt, getAllTodosCtrl);

todosRouter.delete("/:id", validarJwt, deleteTodoCtrl);

todosRouter.post("/", validarJwt, createTodoCtrl);

export { todosRouter };
