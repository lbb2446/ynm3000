import isArrayLike from './isArrayLike'
import arrayLikeKeys from './internal/arrayLikeKeys'

function keys(object) {
  return isArrayLike(object)
    ? arrayLikeKeys(object)
    : Object.keys(Object(object))
}

export default keys
