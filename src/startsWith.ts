function startsWith(string, target, position?) {
  const { length } = string
  position = position == null ? 0 : position
  if (position < 0) {
    position = 0
  }
  if (position > length) {
    position = length
  }
  target = `${target}`
  return string.slice(position, position + target.length) == target
}

export default startsWith
