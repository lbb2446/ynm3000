/**
 * number是否在指定范围内
 * @param number
 * @param start
 * @param end
 */
function baseInRange(number, start, end) {
  return number >= Math.min(start, end) && number <= Math.max(start, end)
}

export default baseInRange
