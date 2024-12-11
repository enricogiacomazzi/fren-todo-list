import { useState, useEffect } from 'react';
import './App.css'
import { AddTodo } from './components/Add-todo'
import { TodoList } from './components/Todo-list'

const TODO_URL = 'http://localhost:3000/todos';

function App() {

  const [todos, setTodos] = useState([]);

  async function getTodos() {
      const response = await fetch(TODO_URL);
      setTodos(await response.json());
  }

  async function addTodo(todo) {
    const respose = await fetch(TODO_URL, {
        method: 'POST',
        body: JSON.stringify(todo)
    });

    const created = await respose.json();
    setTodos([...todos, created]);

    // await getTodos();

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
          <TodoList todos={todos} />  
        </div>
      </div>
    </div>
  )
}


export default App
