import getAllKeys from './getAllKeys'

const COMPARE_PARTIAL_FLAG = 1

/**
 *
 * @param object 对比的数据
 * @param other 对比的另一个数据
 * @param bitmask 对比的类型，1-unordered，2-partial
 * @param customizer 自定义对比函数
 * @param equalFunc 判断等值的函数
 * @param stack 堆栈遍历
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  const isPartial = bitmask & COMPARE_PARTIAL_FLAG
  const objProps = getAllKeys(object)
  const objLength = objProps.length
  const othProps = getAllKeys(other)
  const othLength = othProps.length

  if (objLength !== othLength && !isPartial) {
    return false
  }

  let key
  let index = objLength
  while (index--) {
    key = objProps[index]
    if (
      !(isPartial
        ? key in othProps
        : Object.prototype.hasOwnProperty.call(other, key))
    ) {
      return false
    }
  }

  const stacked = stack.get(object)
  if (stacked && stack.get(other)) {
    return stacked === other
  }
  let result = true
  stack.set(object, other)
  stack.set(other, object)

  let compared
  let skipCtor: number | boolean = isPartial
  while (++index < objLength) {
    key = objProps[index]
    const objValue = object[key]
    const othValue = other[key]

    if (customizer) {
      compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack)
    }
    if (
      !(compared === undefined
        ? objValue === othValue ||
          equalFunc(objValue, othValue, bitmask, customizer, stack)
        : compared)
    ) {
      result = false
      break
    }
    skipCtor || (skipCtor = key == 'constructor')
  }

  if (result && !skipCtor) {
    const objCtor = object.constructor
    const othCtor = other.constructor
    if (
      objCtor != othCtor &&
      'constructor' in object &&
      'constructor' in other &&
      !(
        typeof objCtor === 'function' &&
        objCtor instanceof objCtor &&
        typeof othCtor === 'function' &&
        othCtor instanceof othCtor
      )
    ) {
      result = false
    }
  }
  stack['delete'](object)
  stack['delete'](other)
  return result
}

export default equalObjects
