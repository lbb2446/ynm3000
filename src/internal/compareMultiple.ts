import compareAscending from './compareAscending'

function compareMultiple(object, other, orders) {
  let index = -1
  const objCriteria = object.criteria
  const othCriteria = other.criteria
  const length = objCriteria.length
  const ordersLength = orders.length

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index])
    if (result) {
      if (index >= ordersLength) {
        return result
      }
      var order = orders[index]
      return result * (order == 'desc' ? -1 : 1)
    }
  }

  return object.index - other.index
}

export default compareMultiple
