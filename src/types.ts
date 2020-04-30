export type CreateAction = {
  type: 'CREATE',
  payload: {
    name: string
    description: string
  }
}

export type UpdateAction = {
  type: 'UPDATE'
  payload: {
    id: number
    name: string
    description: string
  }
}

export type DeleteAction = {
  type: 'DELETE'
  payload: {
    id: number
  }
}

export type ResetAction = {
  type: 'RESET'
}

export type Actions = CreateAction | UpdateAction | DeleteAction | ResetAction

export interface Todo {
  id: number
  name: string
  description: string
  creationDate: string
}

export type NewTodo = Omit<Todo, 'creationDate' | 'id'>

export type UpdatedTodo = Omit<Todo, 'creationDate'> 