import * as todoModel from "../models/todo"

export const listTodos = async () => {
    return todoModel.getAllTodos()
}

export const addTodo = async (title: string) => {
    return todoModel.createTodo(title)
}

export const completeTodo = async (id: number) => {
    return todoModel.updateTodo(id, true)
}

export const removeTodo = async (id: number) => {
    return todoModel.deleteTodo(id)
}