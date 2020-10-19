import baseAssignValue from './baseAssignValue'
import assignValue from './assignValue'

function copyObject(source, props, object, customizer?) {
  const isNew = !object
  object || (object = {})

  for (const key of props) {
    let newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : source[key]
    if (isNew) {
      baseAssignValue(object, key, newValue)
    } else {
      assignValue(object, key, newValue)
    }
  }
  return object
}

export default copyObject
