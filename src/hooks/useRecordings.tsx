import { useState, useEffect } from 'react';
import { Actions } from '../types';
import delay from '../utils/delay';

const initialRecordings = JSON.parse(localStorage.getItem('recordings') || '[]')

const useRecordings = () => {
  const [recordings, setRecordings] = useState<Actions[]>(initialRecordings)
  const [isRecording, setIsRecording] = useState<boolean>(false)

  const checkRecording = (action: Actions) => {

    if (isRecording) {
      setRecordings(recordings => [
        ...recordings,
        action
      ])
    }
  }

  useEffect(() => {
    localStorage.setItem('recordings', JSON.stringify(recordings))
  }, [recordings])

  const clearRecordings = () => {
    setRecordings([])
    localStorage.removeItem('recordings')
  }

  async function playRecording(callback: (arg: Actions) => void) {
    for (let i = 0; i < recordings?.length; i++) {
      i === 0 && await delay(1000)
      callback(recordings[i])
      await delay(1000);
    }
  }

  return {
    recordings,
    isRecording,
    setIsRecording,
    checkRecording,
    clearRecordings,
    playRecording
  }
}

export default useRecordings;
