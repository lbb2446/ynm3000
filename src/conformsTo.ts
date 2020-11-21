import baseConformsTo from './internal/baseConformsTo'
import keys from './keys'

function conformsTo(object, source) {
  return source == null || baseConformsTo(object, source, keys(source))
}

export default conformsTo
