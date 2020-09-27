import last from './last'
import baseXor from './internal/baseXor'
import isArrayLikeObject from './isArrayLikeObject'

function xorWith(...arrays) {
  let comparator = last(arrays)
  comparator = typeof comparator === 'function' ? comparator : undefined

  return baseXor(arrays.filter(isArrayLikeObject), undefined, comparator)
}

export default xorWith
