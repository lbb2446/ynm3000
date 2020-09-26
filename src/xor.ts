import baseXor from './internal/baseXor'
import isArrayLikeObject from './isArrayLikeObject'

function xor(...arrays) {
  return baseXor(arrays.filter(isArrayLikeObject))
}

export default xor
