/**
 * 判断是否是类数组的长度值
 * @param value
 */
function isLength(value) {
  // 数字类型
  // 是正数，且是整数
  // 不超出数字的最大安全数
  return (
    typeof value === "number" &&
    value > -1 &&
    value % 1 === 0 &&
    value < Number.MAX_SAFE_INTEGER
  );
}

export default isLength;
