const formatSeconds = seconds => divide(seconds).map(v => pad(v)).join(':')

const pad = v => v.toString().padStart(2, '0')

const divide = seconds => {
  const minutesDivisor = seconds % (60 * 60)
  const mm = Math.floor(minutesDivisor / 60)
  const secondsDivisor = minutesDivisor % 60
  const ss = Math.ceil(secondsDivisor)
  return [mm, ss]
}

export default formatSeconds
