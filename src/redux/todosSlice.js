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
        favorite: false,
      });
    },
    editTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      todo.text = action.payload.text;
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      todo.completed = !todo.completed;
    },
    favTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      todo.favorite = !todo.favorite;

      // Move favorited to the top of the TodoList
      const index = state.findIndex((todo) => todo.id === action.payload.id);

      if (index >= 0) {
        const removeTodo = state.splice(index, 1);
        state.unshift(...removeTodo);
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    clearCompleted: (state) => {
      return state.filter((todo) => {
        return !todo.completed;
      });
    },
  },
});

export const {
  addTodo,
  editTodo,
  toggleTodo,
  favTodo,
  deleteTodo,
  clearCompleted,
} = todosSlice.actions;
export const selectCount = (state) => state.length;
export default todosSlice.reducer;
