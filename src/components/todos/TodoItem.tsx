'use client';

import { Todo } from '@/generated/prisma';
import styles from './TodoItem.module.css';
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

interface Props {
    todo: Todo;
    toggleTodo: (id: string, completed: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {

    const { id, completed, description } = todo;

    return (
        <div className={ completed ? styles.todoDone : styles.todoPending }>
            <div className='flex flex-col sm:flex-row justify-start hover:cursor-grabs items-center gap-4'>
                <div
                    onClick={() => toggleTodo(id, !completed)}
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
