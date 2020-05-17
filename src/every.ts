/**
 * 数组内所有值都符合传入的校验方法
 * @param array
 * @param predicate
 */
function every(array, predicate) {
  let index = -1
  const length = array == null ? 0 : array.length
  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false
    }
  }
  return true
}

export default every
