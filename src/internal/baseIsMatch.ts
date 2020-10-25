import Stack from './Stack'
import baseIsEqual from './baseIsEqual'

/** Used to compose bitmasks for value comparisons. */
const COMPARE_PARTIAL_FLAG = 1
const COMPARE_UNORDERED_FLAG = 2

/**
 *
 * @param object 对比的对象
 * @param source 要匹配的源对象
 * @param matchData 匹配的的源对象转化过的数据
 * @param customizer 自定义函数
 */
function baseIsMatch(object, source, matchData, customizer?) {
  const length = matchData.length
  let index = length
  const noCustomozer = !customizer

  if (object == null) {
    return !length
  }

  let data
  let result
  object = Object(object)
  while (index--) {
    data = matchData[index]
    //判断同键名的值是否相等
    if (
      noCustomozer && data[2]
        ? data[1] !== object[data[0]]
        : !(data[0] in object)
    ) {
      return false
    }
  }
  while (++index < length) {
    data = matchData[index]
    const key = data[0]
    const objValue = object[key]
    const srcValue = data[1]
    if (noCustomozer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false
      }
    } else {
      const stack = new Stack()
      if (customizer) {
        result = customizer(objValue, srcValue, key, object, source, stack)
      }
      if (
        !(result === undefined
          ? baseIsEqual(
              srcValue,
              objValue,
              COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG,
              customizer,
              stack
            )
          : result)
      ) {
        return false
      }
    }
  }
  return true
}

export default baseIsMatch
