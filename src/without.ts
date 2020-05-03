import isArrayLikeObject from './isArrayLikeObject'
import baseDifference from './internal/baseDifference'

function without(array, ...values) {
  return isArrayLikeObject(array) ? baseDifference(array, values) : []
}

export default without
