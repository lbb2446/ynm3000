import invoke from './invoke'
import isArrayLike from './isArrayLike'

function invokeMap(collection, path, args?) {
  let index = -1
  const isFunc = typeof path === 'function'
  let result = isArrayLike(collection) ? new Array(collection.length) : []
  while (++index < collection.length) {
    const value = collection[index]
    result[index] = isFunc ? path.apply(value, args) : invoke(value, path, args)
  }
  return result
}

export default invokeMap
