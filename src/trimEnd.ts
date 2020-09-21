import stringToArray from './internal/stringToArray'
import charsEndIndex from './internal/charsEndIndex'
import castSlice from './internal/castSlice'

const methodName = ''.trimRight ? 'trimRight' : 'trimEnd'

function trimEnd(string, chars?) {
  if (string && chars === undefined) {
    return string[methodName]()
  }
  if (!string || !chars) {
    return string
  }
  const strSymbols = stringToArray(string)
  const end = charsEndIndex(string, chars) + 1

  return castSlice(strSymbols, 0, end).join('')
}

export default trimEnd
