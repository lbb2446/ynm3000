function baseRange(start, end, step, fromRight?) {
  let index = -1
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0)

  const result = new Array(length)

  while (length--) {
    result[fromRight ? length : ++index] = start
    start += step
  }
  return result
}

export default baseRange
