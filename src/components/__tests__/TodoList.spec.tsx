import React from 'react';
import { render } from '@testing-library/react'
import TodoList from '../TodoList'
import { Todo } from '../../types';

const onUpdate = jest.fn()
const onDelete = jest.fn()

type Todos = Todo[]

const emptyTodos: Todos = []

const setup = (todos = emptyTodos) => {
  const utils = render(
    <TodoList
      todos={todos}
      onUpdate={onUpdate}
      onDelete={onDelete}
    />
  )

  return {
    ...utils
  }
}

const todos: Todo[] = [
  {
    id: 1,
    name: 'test',
    description: 'testing',
    creationDate: Date()
  }
]

describe('<TodoList>', () => {
  it('should return a message that the todo list is empty', () => {
    const { getByText } = setup()
    getByText('No current todos')
  })

  it('should return a todo', () => {
    const { asFragment } = setup(todos)
    expect(asFragment).toMatchSnapshot();
  })
})