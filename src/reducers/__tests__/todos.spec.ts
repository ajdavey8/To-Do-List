import todos from '../todos'
import { CreateAction, UpdateAction, DeleteAction, ResetAction } from '../../types'

const initialState = {
  todos: [],
  count: 0
}

describe('todos reducer', () => {
  it('should CREATE a todo', () => {
    const action: CreateAction = { type: 'CREATE', payload: { name: 'test', description: 'testing todo' } }
    const newState = todos(initialState, action)
    expect(newState).toEqual({
      count: 1,
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
      count: 1,
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
      count: 1,
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
      count: 1,
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
      count: 1,
      todos: []
    })
  })

  it('should RESET the todo list', () => {
    const initialState = {
      count: 1,
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
      count: 0,
      todos: []
    })
  })
})