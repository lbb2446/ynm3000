import isArrayLikeObject from './isArrayLikeObject'
import baseDifference from './internal/baseDifference'
import baseFlatten from './internal/baseFlatten'
import last from './last'

function differenceWith(array, ...values) {
  let comparator = last(values)
  if (isArrayLikeObject(comparator)) {
    comparator = undefined
  }
  return isArrayLikeObject(array)
    ? baseDifference(
        array,
        baseFlatten(values, 1, isArrayLikeObject, true),
        undefined,
        comparator
      )
    : []
}

export default differenceWith
