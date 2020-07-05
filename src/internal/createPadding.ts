import baseToString from './baseToString'
import repeat from '../repeat'
import stringSize from './stringSize'
import hasUnicode from './hasUnicode'
import castSlice from './castSlice'
import stringToArray from './stringToArray'

function createPadding(length, chars) {
  chars = chars === undefined ? ' ' : baseToString(chars)

  const charsLength = chars.length
  if (charsLength < 2) {
    return charsLength ? repeat(chars, length) : chars
  }

  const result = repeat(chars, Math.ceil(length / stringSize(chars)))

  return hasUnicode(chars)
    ? castSlice(stringToArray(result), 0, length).join('')
    : result.slice(0, length)
}

export default createPadding
