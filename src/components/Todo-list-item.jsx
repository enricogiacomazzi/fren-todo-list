

export const TodoListItem = ({todo, completeTodo, deleteTodo}) => {

    return (
        <li className="list-group-item">
            <span className={todo.done ? 'done' : ''}>{todo.text}</span>
            <div>
                <button onClick={completeTodo} className="btn btn-primary m-1">
                    <i className="fa fa-times" />
                </button>
                <button onClick={deleteTodo} className="btn btn-danger m-1">
                    <i className="fa fa-trash" />
                </button>
            </div>

        </li>
    )
}