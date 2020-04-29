import React from 'react';
import styled from 'styled-components';

const Recorder = styled.div`
  background: #ffffff;
  box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  border-radius: 3px;
  margin: 32px 16px;
  padding: 16px 8px;
`

const Heading = styled.h2`
  text-align: center;
  margin: 8px;
`

const Buttons = styled.div`
  display: grid;
  grid-auto-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Button = styled.button`
  color: #494949;
  cursor: pointer;
  text-decoration: none;
  background: #ffffff;
  padding: 16px;
  border: 2px solid #f7ab1b;
  border-radius: 3px;
  transition: all 0.4s ease 0s;
  margin: 8px;

  :hover:enabled {
    color: #ffffff;
    background: #f7ab1b;
    border-color: #f7ab1b;
    transition: all 0.4s ease 0s;
  }

  :disabled {
    color: #6c757d;
  }
`

interface RecorderPanel {
  isRecording: boolean
  startRecording: () => void
  stopRecording: () => void
  clearRecording: () => void
  playRecording: () => void
}

const RecorderPanel = ({ isRecording, startRecording, stopRecording, clearRecording, playRecording }: RecorderPanel) => (
  <Recorder>
    <Heading>Record your actions</Heading>
    <Buttons>
      <Button onClick={startRecording} disabled={isRecording}>Record</Button>
      <Button onClick={stopRecording} disabled={!isRecording}>Stop Recording</Button>
      <Button onClick={clearRecording}>Clear Recording</Button>
      <Button onClick={playRecording}>Play Recording</Button>
    </Buttons>
  </Recorder>
)

export default RecorderPanel;
