import * as todoModel from "../models/todo"

export const listTodos = async () => {
    return todoModel.getAllTodos()
}

export const addTodo = async (title: string, description: string) => {
    return todoModel.createTodo(title, description)
}

export const completeTodo = async (id: number) => {
    return todoModel.updateTodo(id, true)
}

export const removeTodo = async (id: number) => {
    return todoModel.deleteTodo(id)
}