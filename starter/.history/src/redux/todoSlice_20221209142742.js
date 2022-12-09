import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: "todos",
    initialState:[
        {id:1, title:"todo1", completed:false}
    ] 
})