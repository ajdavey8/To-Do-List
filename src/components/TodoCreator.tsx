import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #058ed8;
  color: #ffffff;
  text-align: center;
  margin: 16px auto;
  padding: 24px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 8px auto;
`

const Label = styled.label`
  margin: 8px 0;
`

const TitleInput = styled.input`
  padding: 4px;
  margin-left: 16px;
  border-radius: 3px;
`
const DescriptionInput = styled.textarea`
  margin-left: 16px;
  padding: 4px;
  border-radius: 3px;
  vertical-align: top;
  min-height: 80px;
`

const Button = styled.button`
  background: #f7ab1b;
  cursor: pointer;
  color: #ffffff;
  border-radius: 3px;
  border: none;
  padding: 8px 16px;
  min-width: 180px;
  margin: 16px auto 0;
`

interface TodoCreator {
  onSubmit: (event: any) => void
}

const TodoCreator: React.FC<TodoCreator> = ({ onSubmit }) => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const todo = {
      name: title,
      description,
    }

    onSubmit(todo)
    setTitle('');
    setDescription('');
  }

  const handleTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }
  const handleDescriptionChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value)
  }

  return (
    <Section>
      <header>
        <h2>Add a new Todo</h2>
      </header>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="title">
          Title:
        <TitleInput
            id="title"
            placeholder='New todo'
            value={title}
            onChange={handleTitleChange}
          />
        </Label>
        <Label htmlFor="description">
          Description:
        <DescriptionInput
            id="description"
            placeholder='Optional further details'
            value={description}
            onChange={handleDescriptionChange}
          />
        </Label>
        <Button>Add</Button>
      </Form>
    </Section>
  )

}

export default TodoCreator;