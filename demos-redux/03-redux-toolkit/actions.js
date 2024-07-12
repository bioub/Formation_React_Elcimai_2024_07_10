import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('ADD_TODO', (title) => {
  return {
    payload: { id: Math.random(), title: title, completed: false },
  };
});

export const updateNewTodo = createAction('UPDATE_NEW_TODO');
