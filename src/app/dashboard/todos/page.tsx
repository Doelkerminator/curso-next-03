import { TodoGrid } from "@/components/todos";
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
            <TodoGrid todos={ todos }/>
        </div>
    );
}