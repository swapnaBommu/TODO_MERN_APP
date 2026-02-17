import express from 'express';
import { createTodo,updateTodo,getTodos,deleteTodo } from "./todo.controller.js";


const router = express.Router();


router.post("/",createTodo);
router.put("/:id",updateTodo);
router.get("/",getTodos);
router.delete("/:id",deleteTodo)

export default router;
