import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getTodosAsync = createAsyncThunk(
    'todos/getTodosAsync',
async () => {
const response = await fetch('http://localhost:7000/todos');
if(response.ok){
    const todos = await response.json();
    return { todos }
}
}
);

export const addTodoAsync = createAsyncThunk(
    'todos/addTodoAsync',
async(payload) => {
    const response = await fetch('http://localhost:7000/todos', {
        method:'POST',
        headers:{
            'content-Type': 'Application/json',
        },
        body:JSON.stringify({title: payload.title}),
    });

    if (response.ok) {
        const todo = await response.json();
        return {todo};
    }
}
);

const todoSlice = createSlice({
    name: "todos",
    initialState:[
        { id:1, title:"todo1", completed:false },
        { id:2, title:"todo2", completed:true },
        { id:3, title:"todo3", completed:false },
    ] ,
    reducers: {
       addTodo: (state, action) => {
           const newTodo = {
            id:Date.now(), 
            title: action.payload.title, 
            completed: false,  
           };
           state.push(newTodo);
       },
       toggleComplete: (state, action) => {
           const index = state.findIndex(
               (todo) => todo.id === action.payload.id
               );
               state[index].completed = action.payload.completed;
       },
       deleteTodo: (state, action) => {
           return state.filter((todo)=> todo.id !== action.payload.id)
       },
    },
    extraReducers: {
        [getTodosAsync.pending]: (state, action) =>{
            console.log('fetching data...');
        },
        [getTodosAsync.fulfilled]: (state, action) => {
            console.log('fetched data successfully...');
            return action.payload.todos;
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.push(act)
        }
    },
});

export const { 
    addTodo,
    toggleComplete,
    deleteTodo,
 } = todoSlice.actions;

export default todoSlice.reducer;