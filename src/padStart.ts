import stringSize from './internal/stringSize'
import createPadding from './internal/createPadding'

function padStart(string, length, chars?) {
  const strLength = length ? stringSize(string) : 0
  return length && length > strLength
    ? createPadding(length - strLength, chars) + string
    : string || ''
}
export default padStart
