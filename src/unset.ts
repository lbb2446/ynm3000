import baseUnset from './internal/baseUnset'

function unset(object, path) {
  return object == null ? true : baseUnset(object, path)
}

export default unset
