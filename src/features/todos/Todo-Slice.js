import {createSlice} from '@reduxjs/toolkit'
const initialState={
  items:[]
}
const TodoSlice = createSlice({
  name:'todo',
  initialState,
  reducers:{
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(),
        Task: action.payload,
        completed: false
      })
    },
    completeTodo: (state , action) =>{
      const todo = state.items.find(item => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
})
export const {addTodo , completeTodo}=TodoSlice.actions
export default TodoSlice.reducer