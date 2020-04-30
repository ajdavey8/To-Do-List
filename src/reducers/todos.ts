import { Actions, Todo } from '../types';

type State = { todos: Todo[] }

const intialState: State = {
  todos: [],
}

function todoReducer(state = intialState, action: Actions) {
  switch (action.type) {
    case 'CREATE': {
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
    case 'UPDATE': {
      return {
        ...state,
        todos: state.todos.map(
          todo => todo.id === action.payload.id ?
            { ...todo, name: action.payload.name, description: action.payload.description }
            : todo)
      }
    }
    case 'DELETE': {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }
    }
    case 'RESET': {
      return {
        todos: []
      }
    }
    default:
      return state;
  }
}

export default todoReducer;