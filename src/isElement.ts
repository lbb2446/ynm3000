import isObjectLike from "./isObjectLike";
import isPlainObject from "./isPlainObject";

function isElement(value) {
  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
}

export default isElement;
