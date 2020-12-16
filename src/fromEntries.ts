function fromEntries(pairs) {
  let result = {}
  if (pairs == null) {
    return result
  }
  for (let pair of pairs) {
    result[pair[0]] = pair[1]
  }
  return result
}

export default fromEntries
