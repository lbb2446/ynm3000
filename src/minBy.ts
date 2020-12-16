import isSymbol from './isSymbol'

function minBy(array, iteratee) {
  let result
  if (array == null) {
    return result
  }

  let computed
  for (const value of array) {
    let current = iteratee(value)

    if (
      computed === undefined
        ? current === current && !isSymbol(current)
        : current < computed
    ) {
      computed = current
      //计算值和原始值都要记录，最后返回原始值
      result = value
    }
  }
  return result
}

export default minBy
