import baseSet from './internal/baseSet'

function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value)
}

export default set
