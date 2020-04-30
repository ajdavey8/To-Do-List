import React, { useReducer } from 'react';

import { UpdateAction, DeleteAction, CreateAction } from './types';
import todoReducer from './reducers/todos';
import useRecordings from './hooks/useRecordings';

import GlobalStyles from './components/GlobalStyles';
import TodoList from './components/TodoList';
import TodoCreator from './components/TodoCreator';
import RecorderPanel from './components/RecorderPanel';
import Header from './components/Header';

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] })
  const {
    checkRecording,
    clearRecordings,
    isRecording,
    setIsRecording,
    playRecording
  } = useRecordings()

  const handleTodoCreate = (todo: any) => {
    const action: CreateAction = { type: 'CREATE', payload: { ...todo } }

    dispatch(action)
    checkRecording(action)
  }

  const handleTodoUpdate = (todo: any) => {
    const action: UpdateAction = { type: 'UPDATE', payload: { ...todo } }

    dispatch(action)
    checkRecording(action)
  }

  const handleTodoDelete = (id: number) => {
    const action: DeleteAction = { type: 'DELETE', payload: { id } }

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
    dispatch({ type: 'RESET' })
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