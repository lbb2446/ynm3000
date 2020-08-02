import arrayReduceRight from './internal/arrayReduceRight'
import baseReduce from './internal/baseReduce'
import baseEachRight from './internal/baseEachRight'

function reduceRight(collection, iteratee, accumulator) {
  const func = Array.isArray(collection) ? arrayReduceRight : baseReduce
  const initAccum = arguments.length < 3
  return func(collection, iteratee, accumulator, initAccum, baseEachRight)
}

export default reduceRight
