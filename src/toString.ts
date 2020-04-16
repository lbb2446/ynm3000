import isSymbol from './isSymbol'

function toString(value) {
  if (value == null) {
    return ''
  }
  if (typeof value === 'string') {
    return value
  }
  if (Array.isArray(value)) {
    return `${value.map((other) => (other == null ? other : toString(other)))}`
  }
  if (isSymbol(value)) {
    return value.toString()
  }
  const result = `${value}`

  return result == '0' && 1 / value == -Infinity ? '-0' : result
}

export default toString
