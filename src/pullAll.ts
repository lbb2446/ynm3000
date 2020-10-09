import basePullAll from './internal/basePullAll'

function pullAll(array, values) {
  return array != null && array.length && values != null && values.length
    ? basePullAll(array, values)
    : array
}

export default pullAll
