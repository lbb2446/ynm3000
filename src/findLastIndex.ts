import toInteger from './toInteger'
import baseFindIndex from './internal/baseFindIndex'

function findLastIndex(array, predicate, fromIndex?) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return -1
  }
  let index = length - 1
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex)
    index =
      fromIndex < 0
        ? Math.min(length + fromIndex, 0)
        : Math.max(fromIndex, length - 1)
  }
  return baseFindIndex(array, predicate, index, true)
}

export default findLastIndex
