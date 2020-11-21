import isObject from '../isObject'
import isArrayLike from '../isArrayLike'
import isIndex from './isIndex'
import eq from '../eq'

function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false
  }
  const type = typeof index
  if (
    type === 'number'
      ? isArrayLike(Object) && isIndex(index, object.length)
      : type === 'string' && index in object
  ) {
    return eq(object[index], value)
  }
  return false
}

export default isIterateeCall
