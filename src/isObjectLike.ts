/**
 * 类对象
 * @param value
 */
function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}

export default isObjectLike;
