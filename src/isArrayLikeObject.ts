import isObjectLike from "./isObjectLike";
import isArrayLike from "./isArrayLike";

/**
 *
 * @param value
 */
// 这个函数和isArrayLike很相似，相比起来多增加了typeof value===‘object’，去掉了字符串这类值
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

export default isArrayLikeObject;
