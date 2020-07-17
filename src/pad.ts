import stringSize from './internal/stringSize'
import createPadding from './internal/createPadding'

function pad(string, length, chars?) {
  const strLength = length ? stringSize(string) : 0
  if (strLength >= length || !string) {
    return string || ''
  }
  const mid = (length - strLength) / 2
  return (
    createPadding(Math.floor(mid), chars) +
    string +
    createPadding(Math.ceil(mid), chars)
  )
}

export default pad
