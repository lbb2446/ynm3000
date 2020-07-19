function copyArray(source, array?) {
  let index = -1
  const { length } = source

  array || (array = new Array(length))
  while (++index < length) {
    array[index] = source[index]
  }

  return array
}

export default copyArray
