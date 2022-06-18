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
    deleteTodo: (state) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export const selectCount = (state) => state.length;
export default todosSlice.reducer;
