import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import TodoListItem from '../TodoListItem'

const onUpdate = jest.fn()
const onDelete = jest.fn()

const setup = () => {
  const utils = render(
    <TodoListItem
      id={1}
      name='test'
      description='testing'
      onUpdate={onUpdate}
      onDelete={onDelete}
    />
  )

  return {
    ...utils
  }
}

describe('<TodoListItem>', () => {
  it('should update the title value', () => {
    const { getByLabelText } = setup()
    const input = getByLabelText('todo title') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'update title' } })
    expect(input.value).toBe('update title')
  })

  it('should update the description value', () => {
    const { getByLabelText } = setup()
    const input = getByLabelText('todo description') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'update description' } })
    expect(input.value).toBe('update description')
  })

  it('should update the todo', () => {
    const { getByText } = setup()
    const button = getByText('Update');
    fireEvent.click(button)
    expect(onUpdate).toHaveBeenCalledWith({ id: 1, name: 'test', description: 'testing' })
  })

  it('should delete the todo', () => {
    const { getByText } = setup()
    const button = getByText('Delete');
    fireEvent.click(button)
    expect(onDelete).toHaveBeenCalledWith(1)
  })
})