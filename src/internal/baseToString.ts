// 和外部的toString方法差不多，都是将变量改为字符串
// 但是这个方法不对null这一类的数据做处理

import isSymbol from '../isSymbol'

/**
 *
 * @param value
 */
function baseToString(value) {
  if (typeof value === 'string') {
    return value
  }
  if (Array.isArray(value)) {
    return `${value.map(baseToString)}`
  }
  if (isSymbol(value)) {
    return value.toString()
  }
  const result = `${value}`
  return result == '0' && 1 / value == -Infinity ? '-0' : result
}

export default baseToString
