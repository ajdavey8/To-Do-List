import { renderHook, act } from '@testing-library/react-hooks';
import useRecordings from '../useRecordings';
import { ResetAction } from '../../types';

jest.mock('../../utils/delay.ts')
const action: ResetAction = { type: 'RESET' }

const mockCallback = jest.fn(x => x);

describe('useRecordings', () => {
  it('should return the an empty recordings array', () => {
    const { result: { current } } = renderHook(() => useRecordings());
    expect(current.recordings).toEqual([])
  })

  it('should switch recording status to on', () => {
    const { result } = renderHook(() => useRecordings());
    expect(result.current.isRecording).toEqual(false);
    act(() => result.current.setIsRecording(true));
    expect(result.current.isRecording).toEqual(true);
  })

  it('should add an action when recording', () => {
    const { result } = renderHook(() => useRecordings());
    act(() => result.current.setIsRecording(true));
    act(() => result.current.checkRecording(action));
    expect(result.current.recordings).toEqual([action]);
  })

  it('should NOT add an action when not recording', () => {
    const { result } = renderHook(() => useRecordings());
    act(() => result.current.checkRecording(action));
    expect(result.current.recordings).toEqual([]);
  })

  it('should clear recordings when clearRecordings is called', () => {
    const { result } = renderHook(() => useRecordings());
    act(() => result.current.setIsRecording(true));
    act(() => result.current.checkRecording(action));
    act(() => result.current.clearRecordings());
    expect(result.current.recordings).toEqual([]);
  })

  it('should play the recordings', async () => {
    const { result } = renderHook(() => useRecordings());
    act(() => result.current.setIsRecording(true));
    act(() => result.current.checkRecording(action));
    await act(() => result.current.playRecording(mockCallback));
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toBe(action);
  })
})