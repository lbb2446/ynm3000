import stringToArray from './internal/stringToArray'
import charsStartIndex from './internal/charsStartIndex'
import charsEndIndex from './internal/charsEndIndex'
import castSlice from './internal/castSlice'

function trim(string, chars?) {
  if (string && chars === undefined) {
    return string.trim()
  }
  if (!string || !chars) {
    return string || ''
  }
  const strSysmbol = stringToArray(string)
  const chrSymbols = stringToArray(chars)

  const start = charsStartIndex(strSysmbol, chrSymbols)
  const end = charsEndIndex(strSysmbol, chrSymbols) + 1
  return castSlice(strSysmbol, start, end).join('')
}

export default trim
