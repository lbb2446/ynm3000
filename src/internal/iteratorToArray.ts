/**
 * iterator结构有点像链表，但是好像一直有next方法
 * @param iterator
 */
function iteratorToArray(iterator) {
  let data
  let result = []

  while (!(data = iterator.next()).done) {
    result.push(data.value)
  }
  return result
}

export default iteratorToArray
