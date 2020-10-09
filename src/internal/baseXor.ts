import baseUniq from './baseUniq'
import baseDifference from './baseDifference'
import baseFlatten from './baseFlatten'

function baseXor(arrays, iteratee?, comparator?) {
  const length = arrays.length
  if (length < 2) {
    return length ? baseUniq(arrays[0]) : null
  }
  let index = -1
  let result = new Array(length)

  while (++index < length) {
    const array = arrays[index]
    let othIndex = -1
    while (++othIndex < length) {
      if (othIndex !== index) {
        result[index] = baseDifference(
          result[index] || array,
          arrays[othIndex],
          iteratee,
          comparator
        )
      }
    }
  }
  //TODO:为什么不开始就拍平的去重呢？
  return baseUniq(baseFlatten(result, 1), iteratee, comparator)
}

export default baseXor
