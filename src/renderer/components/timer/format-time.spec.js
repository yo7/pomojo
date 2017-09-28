import formatTime from './format-time'

describe('formatTime', () => {
  it('format seconds to human reabable text', () => {
    expect(formatTime(1500)).toBe('25:00')
  })

  it('format seconds with leading zeros', () => {
    expect(formatTime(65)).toBe('01:05')
  })
})
