function filter(array, predicate) {
  let index = -1
  let resultIndex = 0
  let result = []
  while (++index < array.length) {
    if (predicate(array[index], index, array)) {
      result[resultIndex++] = array[index]
    }
  }
  return result
}

export default filter
