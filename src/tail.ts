/**
 * 返回除第一个元素之外的数组其他元素
 * @param array
 */
function tail(array) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  const [, ...result] = array
  return result
}

export default tail
