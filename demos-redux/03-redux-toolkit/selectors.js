export function todosSelector(state) {
  return state.todos;
}

export function newTodoSelector(state) {
  return state.newTodo;
}

export function todosCompletedNumberSelector(state) {
  return state.todos.filter(t => t.completed).length;
}