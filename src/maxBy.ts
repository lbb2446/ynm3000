import { isSymbol } from 'util'

function maxBy(array, iteratee) {
  let result
  if (array == null) {
    return result
  }
  let computed
  for (const item of array) {
    let value = iteratee(item)

    if (
      value != null && computed === undefined
        ? value === value && !isSymbol(value)
        : value > computed
    )
      computed = value
    result = item
  }
  return result
}

export default maxBy
