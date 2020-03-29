import getTag from './getTag'
import isBuffer from '../isBuffer'
import Stack from './Stack'
import isTypedArray from '../isTypedArray'
import equalByTag from './equalByTag'
import equalArrays from './equalArrays'
import equalObjects from './equalObjects'

const argsTag = '[object Arguments]'
const arrayTag = '[object Array]'
const objectTag = '[object Object]'

const COMPARE_PARTIAL_FLAG = 1

const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 *
 * @param object 对比的数据
 * @param other 对比的另一个数据
 * @param bitmask 对比的类型，1-unordered，2-partial
 * @param customizer 自定义对比函数
 * @param equalFunc 判断等值的函数
 * @param stack 堆栈遍历
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  //TODO:为什么要搞那么复杂，直接getTag不就好了吗
  let objIsArr = Array.isArray(object)
  const othIsArr = Array.isArray(other)
  let objTag = objIsArr ? arrayTag : getTag(object)
  let othTag = othIsArr ? arrayTag : getTag(other)

  objTag = objTag == argsTag ? objectTag : objTag
  othTag = othTag == argsTag ? objectTag : othTag

  let objIsObj = objTag == objectTag
  const othIsObj = othTag == objectTag
  const isSameTag = objTag == othTag

  if (isSameTag && isBuffer(object)) {
    if (isBuffer(other)) {
      return false
    }
    objIsArr = true
    objIsObj = false
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack())
    return objIsArr || isTypedArray(object)
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack)
  }
  if (bitmask & COMPARE_PARTIAL_FLAG) {
    const objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__')
    const othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__')
    if (objIsWrapped || othIsWrapped) {
      const objUnwrapped = objIsWrapped ? object.value() : object
      const othUnwrapped = othIsWrapped ? other.value() : other

      stack || (stack = new Stack())

      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack)
    }
  }
  if (!isSameTag) {
    return false
  }
  stack || (stack = new Stack())
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack)
}

export default baseIsEqualDeep
