import { Request, Response } from 'express';
import * as todoService from "../services/todoService"
import * as HttpResponse from "../utils/http-helper"

export const getTodos = async (req: Request, res: Response) => {
    let httpResponse = null
    try {
        const todos = await todoService.listTodos()
        httpResponse = HttpResponse.ok(todos)
        res.status((await httpResponse).statusCode).json((await httpResponse).body)
    } catch (error) {
        httpResponse = HttpResponse.serverError("Failed to fetch todos")
        res.status((await httpResponse).statusCode).json((await httpResponse).body)
    }
}
  
export const createTodo = async (req: Request, res: Response) => {
    const { title } = req.body
    let httpResponse = null
    try {
        const newTodo = await todoService.addTodo(title)
        httpResponse = HttpResponse.created(newTodo)
        res.status((await httpResponse).statusCode).json((await httpResponse).body)
    } catch (error) {
        httpResponse = HttpResponse.serverError("Failed to create todo")
        res.status((await httpResponse).statusCode).json((await httpResponse).body)
    }
}

export const markTodoComplete = async (req: Request, res: Response) => {
    const { id } = req.params
    let httpResponse = null
    try {
        const updatedTodo = await todoService.completeTodo(Number(id))
        httpResponse = HttpResponse.ok(updatedTodo)
        res.status((await httpResponse).statusCode).json((await httpResponse).body)
    } catch (error) {
        httpResponse = HttpResponse.serverError("Failed to mark todo as complete")
        res.status((await httpResponse).statusCode).json((await httpResponse).body)
    }
}

export const deleteTodo = async (req: Request, res: Response) => {
    const { id } = req.params
    let httpResponse = null
    try {
        await todoService.removeTodo(Number(id))
        httpResponse = HttpResponse.noContent()
        res.status((await httpResponse).statusCode).json((await httpResponse).body)
    } catch (error) {
        httpResponse = HttpResponse.serverError("Failed to delete todo")
        res.status((await httpResponse).statusCode).json((await httpResponse).body)
    }
}