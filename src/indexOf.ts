import toInteger from './toInteger'
import baseIndexOf from './internal/baseIndexOf'

function indexOf(array, value, fromIndex?) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return -1
  }
  let index = fromIndex == null ? 0 : toInteger(fromIndex)
  if (index < 0) {
    index = Math.max(index + length, 0)
  }
  return baseIndexOf(array, value, index)
}

export default indexOf
