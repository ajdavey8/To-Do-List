import { Actions, Todo } from '../types';
import { CREATE, UPDATE, DELETE, RESET } from '../constants/ActionTypes';

type State = { todos: Todo[] }

const intialState: State = {
  todos: [],
}

function todoReducer(state = intialState, action: Actions) {
  switch (action.type) {
    case CREATE: {
      return {
        todos: [
          ...state.todos,
          {
            id: Number(state.todos.reduce((maxId: number, todo: Todo) => Math.max(todo.id, maxId), -1)) + 1,
            name: action.payload.name,
            description: action.payload.description,
            creationDate: Date()
          }
        ]
      }
    }
    case UPDATE: {
      return {
        todos: state.todos.map(
          todo => todo.id === action.payload.id ?
            { ...todo, name: action.payload.name, description: action.payload.description }
            : todo)
      }
    }
    case DELETE: {
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }
    }
    case RESET: {
      return {
        todos: []
      }
    }
    default:
      return state;
  }
}

export default todoReducer;