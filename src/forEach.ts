import arrayEach from './internal/arrayEach'
import baseEach from './internal/baseEach'

function forEach(collection, iteratee) {
  const func = Array.isArray(collection) ? arrayEach : baseEach
  return func(collection, iteratee)
}

export default forEach
