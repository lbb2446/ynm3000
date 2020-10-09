import isObject from '../isObject'
import castPath from './castPath'
import toKey from './toKey'
import isIndex from './isIndex'
import assignValue from './assignValue'

function baseSet(object, path, value, customizer?) {
  if (!isObject(object)) {
    return object
  }
  path = castPath(path, object)
  const length = path.length
  const lastIndex = length - 1

  let index = -1
  let nested = object
  while (nested != null && ++index < length) {
    const key = toKey(path[index])
    let newValue = value

    if (index !== lastIndex) {
      const objValue = nested[key]
      newValue = customizer ? customizer(objValue, key, nested) : undefined
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : isIndex(path[index + 1])
          ? []
          : {}
      }
    }
    assignValue(nested, key, newValue)
    nested = nested[key]
  }
  return object
}

export default baseSet
