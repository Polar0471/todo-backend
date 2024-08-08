import prisma from "../db/db";

export const getAllTodos = async () => {
    return prisma.todo.findMany()
}

export const createTodo = async (title: string, description: string) => {
    return prisma.todo.create({
        data: {
            title,
            description,  
        },
    });
};

export const updateTodo = async (id: number, completed: boolean) => {
    return prisma.todo.update({
        where: { id },
        data: { completed }
    })
}

export const deleteTodo = async (id: number) => {
    return prisma.todo.delete({
        where: { id }
    })
}