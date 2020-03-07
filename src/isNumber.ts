import isObjectLike from "./isObjectLike";
import getTag from "./internal/getTag";

function isNumber(value) {
  return (
    typeof value === "number" ||
    (isObjectLike(value) && getTag(value) === "[object Number]")
  );
}

export default isNumber;
