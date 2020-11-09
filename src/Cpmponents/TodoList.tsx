import React from 'react'
import { Todo } from '../Models/Todo'
import './TodoList.css'

interface props {
    todos: Todo[],
    deleteTodo: (id: number) => void
}

const TodoList: React.FC<props> = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {todos.map(todo => {
                return (
                    <li>
                        <div className='f-row'>
                            <span><b>{todo.title}</b></span>
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </div>
                        <p>{todo.desc}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList
