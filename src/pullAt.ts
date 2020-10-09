import basePullAt from './internal/basePullAt'
import isIndex from './internal/isIndex'
import compareAscending from './internal/compareAscending'
import map from './map'
import baseAt from './internal/baseAt'

function pullAt(array, indexes) {
  const length = array == null ? 0 : array.length
  const result = baseAt(array, indexes)

  basePullAt(
    array,
    map(indexes, (index) => (isIndex(index, length) ? +index : index)).sort(
      compareAscending
    )
  )
  return result
}

export default pullAt
