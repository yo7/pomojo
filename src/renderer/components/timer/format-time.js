const formatTime = time => {
  const {minutes, seconds} = divide(time)
  const mm = format(minutes)
  const ss = format(seconds)
  return `${mm}:${ss}`
}

const format = v => {
  const s = '00' + v
  return s.substr(s.length - 2)
}

const divide = time => {
  const minutesDivisor = time % (60 * 60)
  const minutes = Math.floor(minutesDivisor / 60)
  const secondsDivisor = minutesDivisor % 60
  const seconds = Math.ceil(secondsDivisor)
  return {minutes, seconds}
}

export default formatTime
