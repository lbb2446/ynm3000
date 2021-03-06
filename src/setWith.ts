import baseSet from './internal/baseSet'

function setWith(object, path, value, customizer) {
  customizer = typeof customizer === 'function' ? customizer : undefined
  return object == null ? object : baseSet(object, path, value, customizer)
}

export default setWith
