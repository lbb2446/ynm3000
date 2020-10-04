import last from './last'
import baseUniq from './internal/baseUniq'
import baseFlatten from './internal/baseFlatten'
import isArrayLikeObject from './isArrayLikeObject'

function unionWith(...arrays) {
  let comparator = last(arrays)
  comparator = typeof comparator === 'function' ? comparator : undefined
  return baseUniq(
    baseFlatten(arrays, 1, isArrayLikeObject, true),
    undefined,
    comparator
  )
}

export default unionWith
