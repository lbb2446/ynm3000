import unzipWith from './unzipWith'

function zipWith(...arrays) {
  let length = arrays.length
  let iteratee = length > 1 ? arrays[length - 1] : undefined
  //TODO:(arrays.pop(), iteratee)这啥写法
  iteratee =
    typeof iteratee === 'function' ? (arrays.pop(), iteratee) : undefined
  return unzipWith(arrays, iteratee)
}

export default zipWith
