import isArrayLike from './isArrayLike'
import { isString } from 'util'
import stringSize from './internal/stringSize'
import getTag from './internal/getTag'

const mapTag = '[object Map]'
const setTag = '[object Set]'

function size(collection) {
  if (collection == null) {
    return 0
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length
  }
  const tag = getTag(collection)
  if (tag === mapTag || tag === setTag) {
    return collection.size
  }
  return Object.keys(collection).length
}

export default size
