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
    }
  }
})
export const {addTodo}=TodoSlice.actions
export default TodoSlice.reducer