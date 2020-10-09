import castPath from './internal/castPath'
import toKey from './internal/toKey'

function result(object, path, defaultValue?) {
  path = castPath(path, object)

  let index = -1
  let length = path.length

  if (!length) {
    length = 1
    object = undefined
  }

  while (++index < length) {
    let value = object == null ? undefined : object[toKey(path[index])]
    if (value === undefined) {
      index = length
      value = defaultValue
    }
    object = typeof value === 'function' ? value.call(object) : value
  }

  return object
}

export default result
