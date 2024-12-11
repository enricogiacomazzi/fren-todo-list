import { useState, useEffect } from 'react';
import {GetTodos, AddTodoItem, CompleteTodo, DeleteTodo, } from './api';

export const useTodos = () => {
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

    return {
        todos,
        addTodo,
        completeTodo,
        deleteTodo
    }
}