import { ADD_TODO, UPDATE_NEW_TODO } from "./constants.js";

// Flux Standard Action
// Convention qui donne un format à l'action
// { type: 'string', payload: ''|{}|[] }


export function addTodo(title) {
  return {
    type: ADD_TODO,
    payload: { id: Math.random(), title: title, completed: false },
  };
}

export function updateNewTodo(value) {
  return { type: UPDATE_NEW_TODO, payload: value };
}
