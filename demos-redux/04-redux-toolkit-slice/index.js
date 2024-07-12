import { configureStore } from '@reduxjs/toolkit';
import { newTodoReducer, newTodoSelector, updateNewTodo } from './slices/newTodoSlice.js';
import { addTodo, todosReducer, todosSelector } from './slices/todosSlice.js';

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

// Avec les slices l'action creator reçoit obligatoirement payload (pas de prepareAction comme
// dans l'exemple précédent)
store.dispatch(addTodo({ id: Math.random(), title: 'ABC', completed: false }))
store.dispatch(updateNewTodo('ABCD'))