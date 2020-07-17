import baseGet from './baseGet'
import castPath from './castPath'
import baseSet from './baseSet'

function basePickBy(object, paths, predicate) {
  let index = -1
  const length = paths.length
  const result = {}

  while (++index < length) {
    const path = paths[index]
    const value = baseGet(object, path)
    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value)
    }
  }

  return result
}

export default basePickBy
