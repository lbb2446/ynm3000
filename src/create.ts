function create(prototype, properties) {
  prototype = prototype === null ? null : Object(prototype)
  let result = Object.create(prototype)
  return properties == null ? result : Object.assign(result, properties)
}

export default create
