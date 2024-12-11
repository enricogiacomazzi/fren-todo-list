import { useRef } from "react";


export const AddTodo = ({add}) => {
    const inputRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        add({
            text: inputRef.current.value, 
            done: false
        });

        inputRef.current.value = '';



        // console.log(respose);

    }

    return (
        <form className="form-inline" onSubmit={handleSubmit}>
            <div className="form-group">
                <input ref={inputRef} className="form-control" type="text" style={{width: '70%'}} />
                <input  className="btn btn-success" 
                        type="submit" 
                        value="aggiungi" />
            </div>

        </form>
    )
}