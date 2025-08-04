'use client';

import { Todo } from '@/generated/prisma';
import { TodoItem } from './TodoItem';

import * as api from '@/helpers/todos';

interface Props {
    todos?: Todo[];
}

export const TodoGrid = ({ todos = [] }: Props) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            { 
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={ api.updateTodo }/>
                ))
            }
        </div>
    )
}
