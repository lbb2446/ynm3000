import eq from '../eq'

// 搜索二维数组的key的顺序?
function assocIndexOf(array, key) {
  let { length } = array
  while (length--) {
    if (eq(array[length][0], key)) {
      return length
    }
  }
  return -1
}

export default assocIndexOf
