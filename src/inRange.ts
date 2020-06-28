import baseInRange from './internal/baseInRange'

/**
 *
 * @param number
 * @param start
 * @param end
 */
function inRange(number, start, end?) {
  //可以不传end
  if (end === undefined) {
    end = start
    start = 0
  }
  return baseInRange(+number, +start, +end)
}

export default inRange
