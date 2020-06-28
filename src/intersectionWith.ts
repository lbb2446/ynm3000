import last from './last'
import map from './map'
import castArrayLikeObject from './internal/castArrayLikeObject'
import baseIntersection from './internal/baseIntersection'

/**
 * 比较数组取相似结果
 * @param arrays
 */
function intersectionWith(...arrays) {
  let comparator = last(arrays)
  const mapped = map(arrays, castArrayLikeObject)

  comparator = typeof comparator === 'function' ? comparator : undefined
  if (comparator) {
    mapped.pop()
  }

  return arrays.length && arrays[0] === mapped[0]
    ? baseIntersection(mapped, undefined, comparator)
    : []
}

export default intersectionWith
