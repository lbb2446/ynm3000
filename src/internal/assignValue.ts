// import eq from '../eq'
import baseAssignValue from './baseAssignValue'

function assignValue(object, key, value) {
  const objValue = object[key]
  // &&
  //   eq(objValue, value)
  //TODO:原函数有两数相等才能设值，但是运行起来这样会有问题，有些原本没这个键的就没法赋值，
  // 所以改动了一点，不知道会不会有什么影响
  if (!Object.prototype.hasOwnProperty.call(object, key)) {
    if (value !== 0 || 1 / value === 1 / objValue) {
      baseAssignValue(object, key, value)
    }
  } else if (!(key in object) && value === undefined) {
    baseAssignValue(object, key, value)
  }
}

export default assignValue