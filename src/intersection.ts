import castArrayLikeObject from './internal/castArrayLikeObject'
import map from './map'
import baseIntersection from './internal/baseIntersection'

function intersection(...arrays) {
  const mapped = map(arrays, castArrayLikeObject)
  return mapped.length && mapped[0] === arrays[0]
    ? baseIntersection(mapped)
    : []
}

export default intersection
