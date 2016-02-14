import * as types from '../actions/actionTypes';

const initialState = {
  todos: [],
};

let todoId = 0;

export default function todos(state = initialState, action = {}) {

  switch (action.type) {
    case types.ADD_TODO:
      if (!action.todo.text) return state;
      const newTodo = {
        text: 'Todo: ' + action.todo.text,
        id: todoId++,
      };
      return {
        ...state,
        todos: [newTodo, ...state.todos],
      };
    case types.REMOVE_TODO:
      const index = action.index;
      const todos = state.todos.reduce((prev, todo) => {
        console.log(prev);
        if (todo.id === index) return prev;
        else return [...prev, todo];
      }, []);
      console.log(todos);
      return {
        ...state,
        todos,
      };
    default:
      return state;
  }
}
