import isRegExp from './isRegExp'
import hasUnicode from './internal/hasUnicode'
import castSlice from './internal/castSlice'
import stringToArray from './internal/stringToArray'

const MAX_ARRAY_LENGTH = 4294967295

function split(string, separator, limit?) {
  limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0
  if (!limit) {
    return []
  }

  if (
    string &&
    (typeof separator === 'string' ||
      (separator !== null && !isRegExp(separator)))
  ) {
    if (!separator && hasUnicode(string)) {
      return castSlice(stringToArray(string), 0, limit)
    }
  }
  return string.split(separator, limit)
}

export default split
