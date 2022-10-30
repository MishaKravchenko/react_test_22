import React from 'react';
import FormTodos from "../../components/FormTodos/FormTodos";
import {useSelector} from "react-redux";
import Todos from "../../components/Todos/Todos";

const TodosPage = () => {

    const {todos} = useSelector(state => state['todoReducer']);

    return (
        <div>
            <FormTodos/>
            {todos && todos.map(todo => <Todos key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default TodosPage;