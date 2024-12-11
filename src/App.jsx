import './App.css'
import { AddTodo } from './components/Add-todo'
import { TodoList } from './components/Todo-list'

import { useTodos } from './useTodos';

function App() {
  const {todos, addTodo, completeTodo, deleteTodo} = useTodos();

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
