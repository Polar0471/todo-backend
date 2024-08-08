import { Router } from "express";

const router = Router()

router.get("/", getTodos)
router.post("/", createTodo)
router.patch("/:id", markTodoComplete)
router.delete("/:id", deleteTodo)

export default router