
const TODO_URL = 'http://localhost:3000/todos';

export async function GetTodos() {
    const response = await fetch(TODO_URL);
    return await response.json()
}

export async function AddTodoItem(todo) {
    const respose = await fetch(TODO_URL, {
        method: 'POST',
        body: JSON.stringify(todo)
    });

    return  await respose.json();
  }

  export const CompleteTodo = async (todo) => {
    const res = await fetch(`${TODO_URL}/${todo.id}`, {
        method: 'PATCH',
        body: JSON.stringify({...todo,  done: !todo.done})
    });

    return await res.json();
  }

  export const DeleteTodo = async (todo) => {
    const res = await fetch(`${TODO_URL}/${todo.id}`, {
        method: 'DELETE'
    });

    return res.ok;
  }