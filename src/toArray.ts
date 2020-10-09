import isArrayLike from './isArrayLike'
import { isString } from 'util'
import stringToArray from './internal/stringToArray'
import copyArray from './internal/copyArray'
import iteratorToArray from './internal/iteratorToArray'
import getTag from './internal/getTag'
import mapToArray from './internal/mapToArray'
import setToArray from './internal/setToArray'
import values from './values'

const mapTag = '[object Map]'
const setTag = '[object Set]'

const symIterator = Symbol.iterator

function toArray(value) {
  if (!value) {
    return []
  }
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value)
  }
  if (symIterator && value[symIterator]) {
    return iteratorToArray(value[symIterator]())
  }
  //TODO:map,set类型都走的上面的构造器，没走这一步
  const tag = getTag(value)
  const func =
    tag === mapTag ? mapToArray : tag === setTag ? setToArray : values

  return func(value)
}

export default toArray
