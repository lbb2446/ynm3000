import castPath from './castPath'
import toKey from './toKey'
import last from '../last'
import parent from './parent'

function baseUnset(object, path) {
  path = castPath(path, object)
  object = parent(object, path)
  return object == null || delete object[toKey(last(path))]
}

export default baseUnset
