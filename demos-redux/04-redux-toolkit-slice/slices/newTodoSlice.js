

import { createSlice } from "@reduxjs/toolkit";

const initialState = 'ABC';

// 'UPDATE_NEW_TODO'
// ->
// 'newTodo/updateNewTodo'


const newTodoSlice = createSlice({
  initialState: initialState,
  name: 'newTodo',
  reducers: {
    updateNewTodo(state, action) {
      return action.payload;
    }
  },
  selectors: {
    newTodoSelector(state) {
      return state;
    }
  }
});

export const { updateNewTodo } = newTodoSlice.actions;
export const newTodoReducer = newTodoSlice.reducer;
export const { newTodoSelector } = newTodoSlice.selectors;

