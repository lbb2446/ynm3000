import baseGet from './internal/baseGet'

function propertyOf(object) {
  return (path) => (object == null ? undefined : baseGet(object, path))
}

export default propertyOf
