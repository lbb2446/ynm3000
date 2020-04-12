import arrayReduce from './internal/arrayReduce'
import baseReduce from './internal/baseReduce'
import baseEach from './internal/baseEach'

function reduce(collection, iteratee, accumulator) {
  const func = Array.isArray(collection) ? arrayReduce : baseReduce
  const initAccum = arguments.length < 3
  return func(collection, iteratee, accumulator, initAccum, baseEach)
}

export default reduce
