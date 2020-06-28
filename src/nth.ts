import isIndex from './internal/isIndex'

function nth(array, n) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return
  }
  let index = n < 0 ? Math.max(n + length, 0) : Math.min(n, length)
  return isIndex(index, length) ? array[index] : undefined
}

export default nth
