import formatTime from './format-time'

test('format seconds to human reabable text', () => {
  expect(formatTime(1500)).toBe('25:00')
})

test('format seconds with offset', () => {
  expect(formatTime(65)).toBe('01:05')
})
