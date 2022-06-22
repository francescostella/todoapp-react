import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: uuidv4(),
        text: action.payload.text,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },
    clearCompleted: (state) => {
      return state.filter(todo => {
        return !todo.completed;
      });
    },
  },
});

export const { addTodo, deleteTodo, clearCompleted } = todosSlice.actions;
export const selectCount = (state) => state.length;
export default todosSlice.reducer;
