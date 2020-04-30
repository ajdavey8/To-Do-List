import todos from '../todos'
import { CreateAction, UpdateAction, DeleteAction, ResetAction } from '../../types'

const initialState = {
  todos: [],
}

describe('todos reducer', () => {
  it('should CREATE a todo', () => {
    const action: CreateAction = { type: 'CREATE', payload: { name: 'test', description: 'testing todo' } }
    const newState = todos(initialState, action)
    expect(newState).toEqual({
      todos: [{
        id: 0,
        name: 'test',
        description: 'testing todo',
        creationDate: Date()
      }
      ]
    })
  })

  it('should UPDATE a todo', () => {
    const initialState = {
      todos: [{
        id: 0,
        name: 'test',
        description: 'testing todo',
        creationDate: Date()
      }
      ]
    }
    const action: UpdateAction = { type: 'UPDATE', payload: { id: 0, name: 'test updated', description: 'testing todo' } }
    const newState = todos(initialState, action)
    expect(newState).toEqual({
      todos: [{
        id: 0,
        name: 'test updated',
        description: 'testing todo',
        creationDate: Date()
      }
      ]
    })
  })

  it('should DELETE a todo', () => {
    const initialState = {
      todos: [{
        id: 0,
        name: 'test',
        description: 'testing todo',
        creationDate: Date()
      }
      ]
    }
    const action: DeleteAction = { type: 'DELETE', payload: { id: 0 } }
    const newState = todos(initialState, action)
    expect(newState).toEqual({
      todos: []
    })
  })

  it('should RESET the todo list', () => {
    const initialState = {
      todos: [{
        id: 0,
        name: 'test',
        description: 'testing todo',
        creationDate: Date()
      }
      ]
    }
    const action: ResetAction = { type: 'RESET' }
    const newState = todos(initialState, action)
    expect(newState).toEqual({
      todos: []
    })
  })
})