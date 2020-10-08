import slice from './slice'
import toInteger from './toInteger'

function chunk(array, size = 1) {
  size = Math.max(toInteger(size), 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  let result = new Array(Math.ceil(array.length / size))

  while (index < array.length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

export default chunk
