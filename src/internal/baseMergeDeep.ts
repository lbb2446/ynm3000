import assignMergeValue from './assignMergeValue'
import isBuffer from '../isBuffer'
import isTypedArray from '../isTypedArray'
import isPlainObject from '../isPlainObject'
import isArguments from '../isArguments'
import isArrayLikeObject from '../isArrayLikeObject'
import copyArray from './copyArray'
import cloneBuffer from './cloneBuffer'
import cloneTypedArray from './cloneTypedArray'
import toPlainObject from '../toPlainObject'
import isObject from '../isObject'
import initCloneObject from './initCloneObject'

function baseMergeDeep(
  object,
  source,
  key,
  srcIndex,
  mergeFunc,
  customizer,
  stack
) {
  const objValue = object[key]
  const srcValue = source[key]
  const stacked = stack.get(srcValue)

  if (stacked) {
    assignMergeValue(object, key, stacked)
    return
  }
  let newValue = customizer
    ? customizer(objValue, srcValue, `${key}`, object, source, stack)
    : undefined

  let isCommon = newValue === undefined
  if (isCommon) {
    const isArr = Array.isArray(srcValue)
    const isBuff = !isArr && isBuffer(srcValue)
    const isTyped = !isArr && !isBuff && isTypedArray(srcValue)

    newValue = srcValue
    //看是不是对象，不是对象可以直接merge，是对象还得往下
    if (isArr || isBuff || isTyped) {
      if (Array.isArray(objValue)) {
        newValue = objValue
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue)
      } else if (isBuff) {
        isCommon = false
        newValue = cloneBuffer(srcValue, true)
      } else if (isTyped) {
        isCommon = false
        newValue = cloneTypedArray(srcValue, true)
      } else {
        newValue = []
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue)
      } else if (typeof objValue === 'function' || !isObject(objValue)) {
        newValue = initCloneObject(srcValue)
      }
    } else {
      isCommon = false
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue)
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack)
    stack['delete'](srcValue)
  }
  assignMergeValue(object, key, newValue)
}

export default baseMergeDeep
