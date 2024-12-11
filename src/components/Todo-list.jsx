
import { TodoListItem } from "./Todo-list-item";


export const TodoList = ({todos}) => {

    return (
        <ul className="list-group">
            {todos.map(t => <TodoListItem todo={t} key={t.id} />)}
        </ul>
    )
}

