import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: 'ABC', completed: false },
  { id: 2, title: 'DEF', completed: true },
  { id: 3, title: 'HIJ', completed: false },
];

const todosSlice = createSlice({
  initialState: initialState,
  name: 'todos',
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    }
  },
  selectors: {
    todosSelector(state) {
      return state;
    },
    todosCompletedNumberSelector(state) {
      return state.filter(t => t.completed).length;
    }
  }
});

export const { addTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
export const { todosSelector, todosCompletedNumberSelector } = todosSlice.selectors;


