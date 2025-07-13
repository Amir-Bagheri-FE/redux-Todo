import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from '../features/todos/Todo-Slice'
export const Store=configureStore({
    reducer:{
        todo:TodoReducer
    }
}) 