/**
 * 加了比较函数的baseIndexOf，找到目标值的下标
 * @param array
 * @param value
 * @param fromIndex
 * @param comparator
 */
function baseIndexOfWith(array, value, fromIndex, comparator) {
  let index = fromIndex || -1

  while (++index < array.length) {
    if (comparator(array[index], value)) {
      return index
    }
  }
  return -1
}

export default baseIndexOfWith
