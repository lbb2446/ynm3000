import isTypedArray from './isTypedArray'
import isBuffer from './isBuffer'
import isObject from './isObject'
import baseForOwn from './internal/baseForOwn'
import arrayEach from './internal/arrayEach'

function transform(object, iteratee, accumulator?) {
  const isArr = Array.isArray(object)
  const isArrLike = isArr || isBuffer(object) || isTypedArray(object)

  if (accumulator == null) {
    const Ctor = object && object.constructor
    if (isArrLike) {
      accumulator = isArr ? new Ctor() : []
    } else if (isObject(object)) {
      accumulator =
        typeof Ctor === 'function' ? Object.getPrototypeOf(object) : {}
    } else {
      accumulator = {}
    }
  }
  ;(isArrLike ? arrayEach : baseForOwn)(object, (value, index, object) =>
    iteratee(accumulator, value, index, object)
  )
  return accumulator
}

export default transform
