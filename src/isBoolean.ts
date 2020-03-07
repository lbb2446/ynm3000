import isObjectLike from "./isObjectLike";
import getTag from "./internal/getTag";

// 布尔值不能只使用typeof，要注意new Boolean这种情况
function isBoolean(value) {
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && getTag(value) === "[object Boolean]")
  );
}

export default isBoolean;
