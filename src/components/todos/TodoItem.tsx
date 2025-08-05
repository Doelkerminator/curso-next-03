'use client';

import { Todo } from '@/generated/prisma';
import styles from './TodoItem.module.css';
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';
import { startTransition, useOptimistic } from 'react';

interface Props {
    todo: Todo;
    toggleTodo: (id: string, completed: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {

    const [ todoOptimistic, toggleTodoOptimistic ] = useOptimistic(
        todo,
        (state, newCompleteValue: boolean) => ({...state, completed: newCompleteValue})
    );

    const onToggleTodo = async() => {
        try {
            startTransition(() => toggleTodoOptimistic( !todoOptimistic.completed ));
            await toggleTodo(todoOptimistic.id, !todoOptimistic.completed);
        } catch( error ) {
            toggleTodoOptimistic( !todoOptimistic.completed );
        } 
    };

    const { id, completed, description } = todoOptimistic;

    return (
        <div className={ completed ? styles.todoDone : styles.todoPending }>
            <div className='flex flex-col sm:flex-row justify-start hover:cursor-grabs items-center gap-4'>
                <div
                    // onClick={() => toggleTodo(id, !completed)}
                    onClick={onToggleTodo}
                    className={
                    `flex p-2 rounded-md hover:cursor-pointer hover:opacity-50
                    ${ completed ? 'bg-blue-200' : 'bg-red-200' }`
                }>
                    {
                        completed
                            ? <IoCheckboxOutline size={30}/>
                            : <IoSquareOutline size={30}/>
                    }
                </div>
                <div className='text-left'>{ description }</div>
            </div>
        </div>
    );
}
