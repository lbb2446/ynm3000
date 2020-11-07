/**
 * reduce函数
 * @param array 需处理的数组
 * @param iteratee 函数
 * @param accumulator 累加器
 * @param initAccum 是否取第一个值为累加器初始值
 */
function arrayReduce(array, iteratee, accumulator, initAccum?) {
  const length = array === null ? 0 : array.length
  let index = -1
  if (initAccum && length) {
    accumulator = array[++index]
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array)
  }
  return accumulator
}
export default arrayReduce
