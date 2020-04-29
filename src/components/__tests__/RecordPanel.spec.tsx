import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import RecorderPanel from '../RecorderPanel'

const startRecording = jest.fn()
const stopRecording = jest.fn()
const clearRecording = jest.fn()
const playRecording = jest.fn()


const setup = (isRecording = false) => {
  const utils = render(
    <RecorderPanel
      isRecording={isRecording}
      startRecording={startRecording}
      stopRecording={stopRecording}
      clearRecording={clearRecording}
      playRecording={playRecording}
    />
  )

  return {
    ...utils
  }
}

describe('<RecorderPanel>', () => {
  it('should renders with the passed props', () => {
    const { asFragment } = setup()
    expect(asFragment).toMatchSnapshot();
  })

  it('calls the onClick function to start recording', () => {
    const { getByText } = setup()

    fireEvent.click(getByText('Record'))
    expect(startRecording).toHaveBeenCalled()
  })

  it('calls the onClick function to stop recording', () => {
    const { getByText } = setup(true)

    fireEvent.click(getByText('Stop Recording'))
    expect(stopRecording).toHaveBeenCalled()
  })

  it('calls the onClick function to clear recording', () => {
    const { getByText } = setup()

    fireEvent.click(getByText('Clear Recording'))
    expect(clearRecording).toHaveBeenCalled()
  })

  it('calls the onClick function to play recording', () => {
    const { getByText } = setup(true)

    fireEvent.click(getByText('Play Recording'))
    expect(playRecording).toHaveBeenCalled()
  })
})