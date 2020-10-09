import eq from '../eq'

function baseSortedUniq(array, iteratee?) {
  let seen
  let index = -1
  let resIndex = 0
  const length = array == null ? 0 : array.length
  let result = []
  while (++index < length) {
    const value = array[index]
    const computed = iteratee ? iteratee(value) : value
    if (!index || !eq(computed, seen)) {
      seen = computed
      result[resIndex++] = value
    }
  }
  return result
}

export default baseSortedUniq
