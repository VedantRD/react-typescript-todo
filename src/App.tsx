import React, { useState } from 'react';
import './App.css';
import AddTodoForm from './Cpmponents/AddTodoForm';
import TodoList from './Cpmponents/TodoList';
import { Todo } from './Models/Todo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (title: string, desc: string) => {
    setTodos((prevTodos) => [
      { id: Math.random(), title, desc },
      ...prevTodos
    ])
  }

  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id != id))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
