function arrayReduceRight(array, iteratee, accumulator, initAccum) {
  let length = array == null ? 0 : array.length
  if (initAccum && length) {
    accumulator = array[--length]
  }
  while (length--) {
    accumulator = iteratee(accumulator, array[length], length, array)
  }
  return accumulator
}

export default arrayReduceRight
