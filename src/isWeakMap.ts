import isObjectLike from "./isObjectLike";
import getTag from "./internal/getTag";

function isWeakMap(value) {
  return isObjectLike(value) && getTag(value) === "[object WeakMap]";
}

export default isWeakMap;
