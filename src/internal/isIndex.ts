//不使用number.MAX_SAFE_INTEGER不知道是不是怕有使用者自定义这个变量的值导致计算出错
const MAX_SAFE_INTEGER = 9007199254740991

const reIsUint = /^(?:0|[1-9]\d*)$/

/**
 * 判断value是不是arrayAlike的index值
 * @param value
 * @param length 最大值
 */
function isIndex(value, length) {
  const type = typeof value
  length = length == null ? MAX_SAFE_INTEGER : length

  return (
    !!length &&
    (type === 'number' || (type !== 'symbol' && reIsUint.test(value))) &&
    value > -1 &&
    value % 1 == 0 &&
    value < length
  )
}

export default isIndex
