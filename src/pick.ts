import basePick from './internal/basePick'

function pick(object, ...paths) {
  return object == null ? {} : basePick(object, paths)
}

export default pick
