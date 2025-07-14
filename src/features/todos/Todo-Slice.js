import {createSlice} from '@reduxjs/toolkit'
const initialState={
  items:[]
}
const TodoSlice = createSlice({
  name:'todo',
  initialState,
  reducers:{
    addTodo: (state, action) => {
      if(action.payload !== ''){
        state.items.push({
        id: Date.now(),
        Task: action.payload,
        completed: false
      })}
      
    },
    completeTodo: (state , action) =>{
      const todo = state.items.find(item => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    DeleteTodo: (state , action)=>{
      state.items = state.items.filter(item=> item.id !== action.payload)
    }
  }
})
export const {addTodo , completeTodo , DeleteTodo}=TodoSlice.actions
export default TodoSlice.reducer