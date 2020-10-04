import isArrayLikeObject from './isArrayLikeObject'
import baseUniq from './internal/baseUniq'
import baseFlatten from './internal/baseFlatten'
import last from './last'

function unionBy(...arrays) {
  let iteratee = last(arrays)
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined
  }

  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), iteratee)
}

export default unionBy
