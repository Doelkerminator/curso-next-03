'use client';

import { Todo } from '@/generated/prisma';
import { TodoItem } from './TodoItem';

import * as todosApi from '@/helpers/todos';
import { useRouter } from 'next/navigation';
import { toggleTodo } from './actions/todo-actions';

interface Props {
    todos?: Todo[];
}

export const TodoGrid = ({ todos = [] }: Props) => {
    const router = useRouter();

    // const toggleTodo = async (id: string, complete: boolean) => {
    //     const updatedTodo = await todosApi.updateTodo(id, complete);
    //     console.log(updatedTodo);

    //     router.refresh();
    // }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            { 
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={ toggleTodo }/>
                ))
            }
        </div>
    )
}
