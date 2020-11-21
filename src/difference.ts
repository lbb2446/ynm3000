import isArrayLikeObject from './isArrayLikeObject'
import baseDifference from './internal/baseDifference'
import baseFlatten from './internal/baseFlatten'

function difference(array, ...values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : []
}

export default difference
