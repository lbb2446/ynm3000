import isObjectLike from "./isObjectLike";
import getTag from "./internal/getTag";

function isString(value) {
  return (
    typeof value === "string" ||
    (isObjectLike(value) && getTag(value) === "[object String]")
  );
}

export default isString;
