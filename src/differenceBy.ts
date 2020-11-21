import last from './last'
import isArrayLikeObject from './isArrayLikeObject'
import baseDifference from './internal/baseDifference'
import baseFlatten from './internal/baseFlatten'

function differenceBy(array, ...values) {
  let iteratee = last(values)
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined
  }
  return isArrayLikeObject(array)
    ? baseDifference(
        array,
        baseFlatten(values, 1, isArrayLikeObject, true),
        iteratee
      )
    : []
}

export default differenceBy
