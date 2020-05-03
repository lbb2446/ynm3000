import isObjectLike from "./isObjectLike";
import getTag from "./internal/getTag";
import isPlainObject from "./isPlainObject";

function isError(value) {
  if (!isObjectLike(value)) {
    return false;
  }

  return (
    getTag(value) === "[object DOMException]" ||
    getTag(value) === "[object Error]" ||
    (typeof value.message === "string" &&
      typeof value.name === "string" &&
      !isPlainObject(value))
  );
}

export default isError;
