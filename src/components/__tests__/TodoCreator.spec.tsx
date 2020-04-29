import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import TodoCreator from '../TodoCreator'

const onSubmit = jest.fn()

const setup = () => {
  const utils = render(
    <TodoCreator
      onSubmit={onSubmit}
    />
  )

  return {
    ...utils
  }
}

describe('<TodoCreator>', () => {
  it('should update the title value', () => {
    const { getByLabelText } = setup()
    const input = getByLabelText('Title:') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'title' } })
    expect(input.value).toBe('title')
  })

  it('should update the description value', () => {
    const { getByLabelText } = setup()
    const input = getByLabelText('Description:') as HTMLTextAreaElement;
    fireEvent.change(input, { target: { value: 'description' } })
    expect(input.value).toBe('description')
  })

  it('should submit the todo', () => {
    const { getByText, getByLabelText } = setup()

    const titleInput = getByLabelText('Title:') as HTMLInputElement;
    fireEvent.change(titleInput, { target: { value: 'test' } })

    const descriptionInput = getByLabelText('Description:') as HTMLTextAreaElement;
    fireEvent.change(descriptionInput, { target: { value: 'testing' } })

    fireEvent.click(getByText('Add'))
    expect(onSubmit).toHaveBeenCalledWith({ name: 'test', description: 'testing' })
  })
})