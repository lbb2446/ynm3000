import isLength from "./isLength";

/**
 * 判断是否是有长度的数据类型
 * @param value
 */
function isArrayLike(value) {
  return (
    value !== null && typeof value !== "function" && isLength(value.length)
  );
}

export default isArrayLike;
