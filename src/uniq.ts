import baseUniq from './internal/baseUniq'

/**
 * 和xor方法差不多，都是去重，但是这个不限制类型而且参数是数组，xor是类对象数组才可以
 * @param arrays
 */
function uniq(array) {
  return array != null && array.length ? baseUniq(array) : []
}

export default uniq
