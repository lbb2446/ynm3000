import filter from './filter'
import isArrayLikeObject from './isArrayLikeObject'
import map from './map'
import baseProperty from './internal/baseProperty'

function unzip(array) {
  if (!(array != null && array.length)) {
    return []
  }
  let length = 0
  array = filter(array, (group) => {
    if (isArrayLikeObject(group)) {
      length = Math.max(group.length, length)
      return true
    }
  })
  let index = -1
  let result = []
  while (++index < length) {
    result[index] = map(array, baseProperty(index))
  }

  return result
}

export default unzip
