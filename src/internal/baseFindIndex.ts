/**
 *
 * @param array
 * @param predicate
 * @param fromIndex number
 * @param fromRight boolean,是否从右边开始
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  const { length } = array
  let index = fromIndex + (fromRight ? 1 : -1)
  while (fromRight ? --index : index++ < length) {
    if (predicate(array[index], index, array)) {
      return index
    }
  }
  return -1
}

export default baseFindIndex
