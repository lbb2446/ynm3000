import getTag from "./internal/getTag";
import isObjectLike from "./isObjectLike";

/**
 * 参数类型
 * @param value
 */
function isArguments(value) {
  return isObjectLike(value) && getTag(value) === "[object Arguments]";
}

export default isArguments;
