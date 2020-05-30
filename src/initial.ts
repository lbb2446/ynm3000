import slice from './slice'

/**
 * 获取除了最后一个元素之外所以的数组元素
 * @param array
 */
function initial(array) {
  const length = array == null ? 0 : array.length
  return length ? slice(array, 0, length - 1) : []
}

export default initial
