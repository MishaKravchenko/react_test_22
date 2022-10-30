import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos: []
    },
    reducers: {
        addTodos: (state, action) => {
            state.todos.push({id: new Date().getTime(), name: action.payload.todo, status: false})
        },
        changeStatus: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            todo.status = !todo.status
        },
        deleteTodo: (state, action) => {
            // state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
            const index = state.todos.findIndex(todo => todo.id === action.payload.data);
            state.todos.splice(index, 1)
        }
    }
});

const todoReducer = todoSlice.reducer;

export default todoReducer;
export const {addTodos, changeStatus, deleteTodo} = todoSlice.actions;
