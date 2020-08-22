import baseSortedIndex from './internal/baseSortedIndex'
/**
 * 返回可以被插入参数的位置，目标参数index的后一位
 * @param array
 * @param value
 */
function sortedLastIndex(array, value) {
  return baseSortedIndex(array, value, true)
}

export default sortedLastIndex
