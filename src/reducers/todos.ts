import { Actions, Todo } from '../types';

type State = { todos: Todo[], count: number }

const intialState: State = {
  todos: [],
  count: 0
}

function todoReducer(state = intialState, action: Actions) {
  switch (action.type) {
    case 'CREATE': {
      return {
        count: state.count + 1,
        todos: [
          ...state.todos,
          {
            id: state.count,
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
        count: 0,
        todos: []
      }
    }
    default:
      return state;
  }
}

export default todoReducer;