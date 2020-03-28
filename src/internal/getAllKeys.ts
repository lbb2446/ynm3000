import keys from '../keys'
import getSymbols from './getSymbols'

/**
 * 创建一个带有自身可枚举名/symbol的对象
 * @param object
 */
function getAllKeys(object) {
  const result = keys(object)
  if (!Array.isArray(object)) {
    result.push(...getSymbols(object))
  }
  return result
}

export default getAllKeys
