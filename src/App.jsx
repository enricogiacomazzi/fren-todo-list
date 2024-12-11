import { useState, useEffect } from 'react';
import './App.css'
import { AddTodo } from './components/Add-todo'
import { TodoList } from './components/Todo-list'
import {GetTodos, AddTodoItem, CompleteTodo, DeleteTodo, } from './api';

const TODO_URL = 'http://localhost:3000/todos';

function App() {

  const [todos, setTodos] = useState([]);

  async function getTodos() {
      setTodos(await GetTodos());
  }

  async function addTodo(todo) {
    const created = await AddTodoItem(todo);
    setTodos([...todos, created]);
  }

  const completeTodo = async (todo) => {
    const edited = await CompleteTodo(todo);

    setTodos(todos
      .map(t => t.id === edited.id ? edited : t));
  }

  const deleteTodo = async (todo) => {
    if(await DeleteTodo(todo)) {
      setTodos(todos.filter(t => t.id !== todo.id));
    }
  }


  useEffect(() => {
      getTodos();
  }, []);


  return (
    <div className="container">
      <div className="row m-5">
        <div className="row">
          <AddTodo add={addTodo} />
        </div>
        <div className="row">
          <TodoList 
            todos={todos} 
            completeTodo={completeTodo} 
            deleteTodo={deleteTodo} 
          />  
        </div>
      </div>
    </div>
  )
}


export default App
