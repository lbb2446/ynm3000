import toInteger from './toInteger'
import slice from './slice'

function dropRight(array, n = 1) {
  const length = array == null ? 0 : array.length
  const end = length - toInteger(n)
  return length ? slice(array, 0, end < 0 ? 0 : end) : []
}
export default dropRight
