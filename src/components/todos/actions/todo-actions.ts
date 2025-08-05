'use server';

import { Todo } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const toggleTodo = async(id: string, completed: boolean): Promise<Todo> => {
    const todo = await prisma.todo.findFirst({
        where: { id }
    });

    if( !todo ) {
        throw `Todo con id ${ id } no encontrado.`;
    }

    const updatedTodo = prisma.todo.update({
        where: { id },
        data: {
            completed
        }
    })

    revalidatePath('/dashboard/server-todos');
    return updatedTodo;
}

export const addTodo = async(description: string) => {
    try {
        const todo = await prisma.todo.create({
            data: {
                description
            }
        });
    
        revalidatePath("/dashboard/server-todos");
        return todo;
    } catch ( e ) {
        throw e;
    }
}

export const deleteTodos = async() => {
    await prisma.todo.deleteMany({ where: { completed: true } });
    revalidatePath("/dashboard/server-todos");
}