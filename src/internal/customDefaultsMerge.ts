import isObject from '../isObject'
import baseMerge from './baseMerge'

function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    stack.set(srcValue, objValue)
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack)
    stack['delete'](srcValue)
  }
  return objValue
}

export default customDefaultsMerge
