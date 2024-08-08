import { Router } from "express";
import * as todoController from "./controllers/todoController"

const router = Router()

router.get("/", todoController.getTodos)
router.post("/", todoController.createTodo)
router.patch("/:id", todoController.markTodoComplete)
router.delete("/:id", todoController.deleteTodo)

export default router