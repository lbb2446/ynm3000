import strictIndexOf from './strictIndexOf'
import baseIsNaN from './baseIsNaN'
import baseFindIndex from './baseFindIndex'

/**
 * 不管是不是NaN，都能找到某个值在数组中的位置，找不到返回-1
 * @param array
 * @param value
 * @param fromIndex
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex)
}

export default baseIndexOf
