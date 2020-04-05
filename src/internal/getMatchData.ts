import keys from '../keys'
import isStrictComparable from './isStrictComparable'

/**
 * 获取object的match数组
 * @param object
 */
function getMatchData(object) {
  const result = keys(object)
  let length = result.length
  while (length--) {
    const key = result[length]
    const value = object[key]
    result[length] = [key, value, isStrictComparable(value)]
  }
  return result
}

export default getMatchData
