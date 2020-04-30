import React, { useReducer } from 'react';

import { UpdateAction, DeleteAction, CreateAction, UpdatedTodo, NewTodo } from './types';
import todoReducer from './reducers/todos';
import useRecordings from './hooks/useRecordings';

import GlobalStyles from './components/GlobalStyles';
import TodoList from './components/TodoList';
import TodoCreator from './components/TodoCreator';
import RecorderPanel from './components/RecorderPanel';
import Header from './components/Header';
import { UPDATE, CREATE, DELETE, RESET } from './constants/ActionTypes';

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] })
  const {
    checkRecording,
    clearRecordings,
    isRecording,
    setIsRecording,
    playRecording
  } = useRecordings()

  const handleTodoCreate = (todo: NewTodo) => {
    const action: CreateAction = { type: CREATE, payload: { ...todo } }

    dispatch(action)
    checkRecording(action)
  }

  const handleTodoUpdate = (todo: UpdatedTodo) => {
    const action: UpdateAction = { type: UPDATE, payload: { ...todo } }

    dispatch(action)
    checkRecording(action)
  }

  const handleTodoDelete = (id: number) => {
    const action: DeleteAction = { type: DELETE, payload: { id } }

    dispatch(action)
    checkRecording(action)
  }

  const handleStartRecording = () => {
    setIsRecording(true);
  }

  const handleStopRecording = () => {
    setIsRecording(false)
  }

  const handleClearRecording = () => {
    clearRecordings()
  }

  const handlePlayRecording = () => {
    dispatch({ type: RESET })
    playRecording(dispatch)
  }

  return (
    <>
      <GlobalStyles />
      <Header />
      <RecorderPanel
        isRecording={isRecording}
        startRecording={handleStartRecording}
        stopRecording={handleStopRecording}
        clearRecording={handleClearRecording}
        playRecording={handlePlayRecording}
      />
      <TodoCreator
        onSubmit={handleTodoCreate}
      />
      <TodoList
        todos={state.todos}
        onUpdate={handleTodoUpdate}
        onDelete={handleTodoDelete}
      />
    </>
  )
}

export default App