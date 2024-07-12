import { legacy_createStore } from 'redux';
import { reducer } from './reducers.js';
import { addTodo, updateNewTodo } from './actions.js';
import { newTodoSelector, todosSelector } from './selectors.js';

const store = legacy_createStore(reducer);

console.log('initial state', store.getState());

// element.addEventListener('click', () => {})
store.subscribe(() => {
  console.log('newTodo', newTodoSelector(store.getState()));
  console.log('todos', todosSelector(store.getState()));
});

// element.dispatchEvent(new MouseEvent('click'))
store.dispatch(addTodo('XYZ'))
store.dispatch(updateNewTodo('ABCD'))