import { combineReducers } from "redux";
import { ADD_TODO, UPDATE_NEW_TODO } from "./constants.js";

const initialState = {
  todos: [
    { id: 1, title: 'ABC', completed: false },
    { id: 2, title: 'DEF', completed: true },
    { id: 3, title: 'HIJ', completed: false },
  ],
  newTodo: 'ABC'
};

function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}


function newTodoReducer(state = initialState.newTodo, action) {
  switch (action.type) {
    case UPDATE_NEW_TODO:
      return action.payload;
    default:
      return state;
  }
}

// Pure function
// - prédictive
// - ne modifie pas ses params (notament le state)
// - pas de side effect (ex: requete HTTP)
// const nextState = reducer(actualState, action);
// export function reducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO:
//     // case REMOVE_TODO:
//       return {
//         ...state,
//         todos: todosReducer(state.todos, action)
//       };
//     case UPDATE_NEW_TODO:
//       return {
//         ...state,
//         newTodo: newTodoReducer(state.newTodo, action)
//       };
//     default:
//       return state;
//   }
// }


export const reducer = combineReducers({
  todos: todosReducer,
  newTodo: newTodoReducer,
});