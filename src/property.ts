import isKey from './internal/isKey'
import baseProperty from './internal/baseProperty'
import basePropertyDeep from './internal/basePropertyDeep'
import toKey from './internal/toKey'

function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path)
}

export default property
