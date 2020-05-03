// 数组通过比较函数寻找目标值，返回的是boolean
function arrayIncludesWith(array, target, comparator) {
  if (array == null) {
    return false
  }
  for (const value of array) {
    if (comparator(target, value)) {
      return true
    }
  }
  return false
}

export default arrayIncludesWith
