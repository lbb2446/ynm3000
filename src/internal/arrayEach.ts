function arrayEach(array: Array<any>, iteratee) {
  if (!array.length) {
    return
  }
  let index = -1
  while (++index < array.length) {
    if (iteratee(array[index], index, array) === false) {
      break
    }
  }
  return array
}

export default arrayEach
