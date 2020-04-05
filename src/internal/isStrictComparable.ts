import isObject from '../isObject'

/**
 * 判断某个值是否可以使用全等===判断
 * @param value
 */
function isStrictComparable(value) {
  return value === value && !isObject(value)
}

export default isStrictComparable
