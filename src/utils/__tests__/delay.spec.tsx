import delay from '../delay';

jest.useFakeTimers()

describe('delay()', () => {
  it('should wait for 1 second', () => {
    delay(1000)
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  })
})