import copyArray from './internal/copyArray'
import slice from './slice'

function sampleSize(array, n) {
  n = n == null ? 1 : n
  const length = array == null ? 0 : array.length
  if (!length || n < 1) {
    return []
  }
  n = n > length ? length : n
  let index = -1
  const lastIndex = length - 1
  const result = copyArray(array)
  while (++index < n) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1))
    const value = result[rand]
    result[rand] = result[index]
    result[index] = value
  }
  return slice(result, 0, n)
}

export default sampleSize
