import isObject from './isObject'

const reRegExpChar = /[\\^$.*+?()[\]{}|]/g

const reIsNative = RegExp(
  `^${Function.prototype.toString
    .call(Object.prototype.hasOwnProperty)
    .replace(reRegExpChar, '\\$&')
    .replace(
      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
      '$1.*?'
    )}$`
)

/**
 * 判断是否是原生方法
 * @param value
 */
function isNative(value) {
  // "function.*?\(\) \{ \[native code\] \}"
  return isObject(value) && reIsNative.test(value)
}

export default isNative
