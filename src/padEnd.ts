import stringSize from './internal/stringSize'
import createPadding from './internal/createPadding'

function padEnd(string, length, chars?) {
  const strLength = length ? stringSize(string) : 0

  return length && length > strLength
    ? string + createPadding(length - strLength, chars)
    : string || ''
}

export default padEnd
