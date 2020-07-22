import basePullAll from './internal/basePullAll'

function pullAllWith(array, values, comparator) {
  return array != null && array.length && values != null && values.length
    ? basePullAll(array, values, undefined, comparator)
    : array
}

export default pullAllWith
