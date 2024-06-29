import { ADD_TODO, REMOVE_TODO, UPDATE_CHECKBOX, UPDATE_TODO } from "../actions";

const initialState = JSON.parse(localStorage.getItem('todos')) || [];

export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const addedTodo = [...state, action.payload];
      localStorage.setItem('todos', JSON.stringify(addedTodo));
      return addedTodo;
    case REMOVE_TODO:
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(filteredTodos));
      return filteredTodos;
    case UPDATE_TODO:
      const updatedArray = state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      localStorage.setItem('todos', JSON.stringify(updatedArray));
      return updatedArray;
    case UPDATE_CHECKBOX:
      const todoArray = state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      localStorage.setItem('todos', JSON.stringify(todoArray));
      return todoArray;
    default:
      return state;
  }
};
