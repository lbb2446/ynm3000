import eq from './eq'

const objectProto = Object.prototype
const hasOwnProperty = Object.hasOwnProperty

function defaults(object, ...sources) {
  object = Object(object)
  sources.forEach((source) => {
    if (source != null) {
      source = Object(source)
      for (const key in source) {
        const value = object[key]
        if (
          value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))
        ) {
          object[key] = source[key]
        }
      }
    }
  })
  return object
}

export default defaults
