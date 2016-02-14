import * as types from './actionTypes';

export function addTodo(newTodo) {
  return {
    type: types.ADD_TODO,
    todo: {
      text: newTodo
    }
  };
}

export function removeTodo(index) {
  return {
    index,
    type: types.REMOVE_TODO,
  };
}
