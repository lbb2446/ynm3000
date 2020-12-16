import arrayEachRight from './internal/arrayEachRight'
import baseEachRight from './internal/baseEachRight'

function forEachRight(collection, iteratee) {
  const func = Array.isArray(collection) ? arrayEachRight : baseEachRight

  return func(collection, iteratee)
}

export default forEachRight
