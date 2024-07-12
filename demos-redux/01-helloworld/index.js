import { legacy_createStore } from 'redux';

const initialState = {
  todos: [
    { id: 1, title: 'ABC', completed: false },
    { id: 2, title: 'DEF', completed: true },
    { id: 3, title: 'HIJ', completed: false },
  ],
  newTodo: 'ABC'
};

// Pure function
// - prédictive
// - ne modifie pas ses params (notament le state)
// - pas de side effect (ex: requete HTTP)
// const nextState = reducer(actualState, action);
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          action.todo
        ]
      };
    case 'UPDATE_NEWTODO':
      return {
        ...state,
        newTodo: action.value
      };
    default:
      return state;
  }
}

const store = legacy_createStore(reducer);

console.log('initial state', store.getState());

// element.addEventListener('click', () => {})
store.subscribe(() => {
  console.log('newTodo', store.getState().newTodo);
  console.log('todos', store.getState().todos);
});

// element.dispatchEvent(new MouseEvent('click'))
store.dispatch({ type: 'ADD_TQDO', todo: { id: Math.random(), title: 'XYZ', completed: false } })
store.dispatch({ type: 'UPDATE_NEWTODO', value: 'ABCD' })