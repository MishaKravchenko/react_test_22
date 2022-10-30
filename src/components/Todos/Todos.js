import React from 'react';

import css from './Todos.module.css'
import {changeStatus, deleteTodo} from "../../redux/slices/todo.slice/todo.slice";
import {useDispatch} from "react-redux";


const Todos = ({todo: {id, name, status}}) => {

    const dispatch = useDispatch();

    return (
        <div className={css.todo}>
            <input type="checkbox" value={status} onChange={() => dispatch(changeStatus({id}))}/>
            <div className={status ? css.completed : ""}>Name: {name}</div>
            <button onClick={()=> dispatch(deleteTodo({id}))}>Delete</button>
        </div>
    );
};

export default Todos;