
import { TodoListItem } from "./Todo-list-item";


export const TodoList = ({todos, completeTodo, deleteTodo}) => {

    return (
        <ul className="list-group">
            {todos.map(t => <TodoListItem 
                                todo={t} 
                                completeTodo={() => completeTodo(t)} 
                                deleteTodo={() => deleteTodo(t)}
                                key={t.id} 
                            />)}
        </ul>
    )
}

