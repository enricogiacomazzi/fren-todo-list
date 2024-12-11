import axios from "axios";
const TODO_URL = 'http://localhost:3000/todos';

export async function GetTodos() {
    const response = await axios.get(TODO_URL);
    return response.data;
}

export async function AddTodoItem(todo) {
    const response = await axios.post(TODO_URL, todo);
    return response.data;
  }

  export const CompleteTodo = async (todo) => {
    const res = await axios.patch(`${TODO_URL}/${todo.id}`, 
      {...todo,  done: !todo.done});
    return res.data;
  }

  export const DeleteTodo = async (todo) => {
    const res = await axios.delete(`${TODO_URL}/${todo.id}`);
    return res.status === 200;
  }