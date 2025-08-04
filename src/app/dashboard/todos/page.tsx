import { NewTodo, TodoGrid } from "@/components/todos";
import prisma from "@/lib/prisma";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Todos REST",
    description: "Todos con el REST API",
    keywords: ["todos", "rest", "api"]
}

export default async function TodosPage() {

    const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

    return (
        <div>
            <div className="w-full px-3 mx-4 mb-4">
                <NewTodo />
            </div>
            <TodoGrid todos={ todos }/>
        </div>
    );
}