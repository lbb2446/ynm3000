function baseZipObject(props, values, assignFunc) {
  let index = -1
  let length = props.length
  let result = {}
  while (++index < length) {
    const value = index < values.length ? values[index] : undefined
    assignFunc(result, props[index], value)
  }

  return result
}

export default baseZipObject
