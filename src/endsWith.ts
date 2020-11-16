function endsWith(string, target, position?) {
  const { length } = string
  position = position == undefined ? length : +position
  position = position < 0 || position != position ? 0 : position
  position = position > length ? length : position

  const end = position
  position -= target.length

  return position >= 0 && string.slice(position, end) == target
}

export default endsWith
