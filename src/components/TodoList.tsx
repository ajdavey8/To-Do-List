import React from 'react';
import styled from 'styled-components';

import { Todo } from '../types';

import TodoListItem from './TodoListItem';

const Container = styled.section`
  text-align: center;
  padding: 24px 16px;

  @media only screen and (min-width: 768px) {
    background: #ffffff;
    box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    border-radius: 3px;
    max-width: 600px;
    padding: 24px;
    margin: 0 auto;
  }
`

interface TodoList {
  todos: Todo[]
  onUpdate: (action: any) => void
  onDelete: (id: number) => void
}

const TodoList = ({ todos, onUpdate, onDelete }: TodoList) => (
  <Container>
    {todos?.length ?
      (todos.map(todo => (
        <TodoListItem
          key={todo.id}
          id={todo.id}
          name={todo.name}
          description={todo.description}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      )))
      : <p>No current todos</p>
    }
  </Container>
)

export default TodoList