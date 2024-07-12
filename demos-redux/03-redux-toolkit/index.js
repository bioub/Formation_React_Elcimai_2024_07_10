import { configureStore } from '@reduxjs/toolkit';
import { addTodo, updateNewTodo } from './actions.js';
import { newTodoSelector, todosSelector } from './selectors.js';
import { newTodoReducer, todosReducer } from './reducers.js';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    newTodo: newTodoReducer,
  }
});

console.log('initial state', store.getState());

// element.addEventListener('click', () => {})
store.subscribe(() => {
  console.log('newTodo', newTodoSelector(store.getState()));
  console.log('todos', todosSelector(store.getState()));
});

// element.dispatchEvent(new MouseEvent('click'))
store.dispatch(addTodo('XYZ'))
store.dispatch(updateNewTodo('ABCD'))