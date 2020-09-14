import map from './map'
import toKey from './internal/toKey'
import isSymbol from './isSymbol'
import stringToPath from './internal/stringToPath'

function toPath(value) {
  if (Array.isArray(value)) {
    return map(value, toKey)
  }

  return isSymbol(value) ? [value] : stringToPath(value)
}

export default toPath
