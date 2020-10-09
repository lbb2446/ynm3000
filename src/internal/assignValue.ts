// import eq from '../eq'
import baseAssignValue from './baseAssignValue'

function assignValue(object, key, value) {
  const objValue = object[key]
  // &&
  //   eq(objValue, value)
  //TODO:原函数有两数相等才能设值，但是运行起来这样会有问题，有些原本没这个键的就没法赋值，
  // 还把value!==0改成了!==undifined
  if (!Object.prototype.hasOwnProperty.call(object, key)) {
    if (value !== undefined || 1 / value === 1 / objValue) {
      baseAssignValue(object, key, value)
    }
  } else if (!(key in object) && value === undefined) {
    baseAssignValue(object, key, value)
  } else if (key in object && value) {
    //TODO:原函数对已有的数据是不做赋值处理的，改了点，不知道会不会有什么影响
    baseAssignValue(object, key, value)
  }
}

export default assignValue
