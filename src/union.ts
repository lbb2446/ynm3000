import baseUniq from './internal/baseUniq'
import baseFlatten from './internal/baseFlatten'
import isArrayLikeObject from './isArrayLikeObject'

function union(...arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true))
}

export default union
