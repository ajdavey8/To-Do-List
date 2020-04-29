import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Item = styled.div`
  background: #058ed8;
  border-radius: 3px;
  padding: 16px 0 8px;
  margin: 16px 0;
`

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleInput = styled.input`
  padding: 4px;
  border-radius: 3px;
  margin: 8px 16px;
`
const DescriptionInput = styled.textarea`
  margin: 8px 16px;
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
  min-width: 85px;
  min-height: 40px;
  margin: 16px;

  :disabled {
    background: #ffffff;
    color: #6c757d;
  }
`

const DeleteButton = styled(Button)`
  background: #093554;
`

const ButtonsWrapper = styled.div``

interface UpdatedTodo {
  id: number
  name: string
  description: string
}

interface TodoListItem {
  id: number
  name: string
  description: string
  onUpdate: (todo: UpdatedTodo) => void
  onDelete: (id: number) => void
}

const TodoListItem = ({ id, name, description, onUpdate, onDelete }: TodoListItem) => {
  const [title, setTitle] = useState<string>('')
  const [desc, setDescription] = useState<string>('')

  useEffect(() => {
    setTitle(name)
    setDescription(description)
  }, [name, description])

  const handleUpdate = () => {
    const todo = {
      id,
      name: title,
      description: desc,
    }

    onUpdate(todo)
  }

  const handleDelete = () => {
    onDelete(id)
  }

  const handleTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const handleDescriptionChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value)
  }

  return (
    <Item>
      <Inputs>
        <TitleInput
          id="title"
          placeholder='New todo'
          value={title}
          aria-label='todo title'
          onChange={handleTitleChange}
        />
        <DescriptionInput
          id="description"
          placeholder='Optional further details'
          aria-label='todo description'
          value={desc}
          onChange={handleDescriptionChange}
        />
      </Inputs>
      <ButtonsWrapper>
        <Button onClick={handleUpdate}>Update</Button>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      </ButtonsWrapper>
    </Item>

  )
}

export default TodoListItem;