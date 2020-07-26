import isIndex from './isIndex'
import baseUnset from './baseUnset'

function basePullAt(array, indexes) {
  let length = array ? indexes.length : 0
  const lastIndex = length - 1

  while (length--) {
    let previous
    const index = indexes[length]
    if (lastIndex === length || index !== previous) {
      previous = index
      if (isIndex(index)) {
        array.splice(index, 1)
      } else {
        baseUnset(array, index)
      }
    }
  }
  return array
}

export default basePullAt
