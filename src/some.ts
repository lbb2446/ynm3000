/**
 * 测试数组中是不是至少有1个元素通过了被提供的函数测试
 * @param array
 * @param predicate
 */
function some(array, predicate) {
  let index = -1
  let length = array == null ? 0 : array.length
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true
    }
  }
  return false
}

export default some
