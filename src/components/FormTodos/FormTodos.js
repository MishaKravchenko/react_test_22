import React from 'react';
import {useDispatch} from "react-redux";
import {addTodos} from "../../redux/slices/todo.slice/todo.slice";

const FormTodos = () => {

    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault()
        dispatch(addTodos({todo: e.target.todo.value}))
        console.log(e.target.todo.value);
        e.target.reset()
    }

    return (
        <div>
            <form onSubmit={submit}>
                <label>Todos: <input placeholder="todos" type="text" name={"todo"}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default FormTodos;