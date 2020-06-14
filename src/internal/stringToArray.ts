import hasUnicode from './hasUnicode'
import unicodeToArray from './unicodeToArray'
import asciiToArray from './asciiToArray'

function stringToArray(string) {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string)
}

export default stringToArray
