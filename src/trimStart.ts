import stringToArray from './internal/stringToArray'
import charsStartIndex from './internal/charsStartIndex'
import castSlice from './internal/castSlice'

const methodName = ''.trimLeft ? 'trimLeft' : 'trimStart'

function trimStart(string, chars?) {
  if (string && chars === undefined) {
    return string[methodName]()
  }
  if (!string || !chars) {
    return string
  }
  const strSymbols = stringToArray(string)
  const start = charsStartIndex(string, chars)

  return castSlice(strSymbols, start).join('')
}

export default trimStart
