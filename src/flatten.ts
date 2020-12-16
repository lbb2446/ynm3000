import baseFlatten from './internal/baseFlatten'

function flatten(array) {
  return array == null ? [] : baseFlatten(array, 1)
}

export default flatten
