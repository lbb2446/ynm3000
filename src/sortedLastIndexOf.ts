import baseSortedIndex from './internal/baseSortedIndex'
import eq from './eq'

function sortedLastIndexOf(array, value) {
  const length = array.length == null ? 0 : array.length
  if (length) {
    const index = baseSortedIndex(array, value, true) - 1
    if (eq(array[index], value)) {
      return index
    }
  }

  return -1
}

export default sortedLastIndexOf
