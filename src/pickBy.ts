import getAllKeysIn from './internal/getAllKeysIn'
import map from './map'
import basePickBy from './internal/basePickBy'

function pickBy(object, predicate) {
  if (object == null) {
    return {}
  }
  const props = map(getAllKeysIn(object), (prop) => [prop])
  return basePickBy(object, props, (value, path) => predicate(value, path[0]))
}
export default pickBy
