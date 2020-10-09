import isSymbol from '../isSymbol'

const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
const reIsPlainProp = /^\w*$/

/**
 * 判断是否可以作为键名
 * @param value
 */
function isKey(value, object?) {
  if (Array.isArray(value)) {
    return false
  }
  const type = typeof value
  if (
    type === 'number' ||
    type === 'boolean' ||
    type == null ||
    isSymbol(value)
  ) {
    return true
  }
  return (
    reIsPlainProp.test(value) ||
    !reIsDeepProp.test(value) ||
    (object !== null && value in Object(object))
  )
}

export default isKey
