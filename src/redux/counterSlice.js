import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState:{
        count: 0
    },reducers:{
        increment:(state)=>{
            state.count++
        },
        decrement:(state)=>{
            state.count--
        },
        reset:(state)=>{
            return {...state,count:0}
        },
        incremetByClick: (state,action)=>{
            state.count+=action.payload
        }
    }

})
export const {increment,decrement,reset,incremetByClick} = counterSlice.actions
export default counterSlice.reducer