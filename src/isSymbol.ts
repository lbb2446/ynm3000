import isObjectLike from "./isObjectLike";
import getTag from "./internal/getTag";

function isSymbol(value) {
  return (
    typeof value === "symbol" ||
    (isObjectLike(value) && getTag(value) === "[object Symbol]")
  );
}

export default isSymbol;
