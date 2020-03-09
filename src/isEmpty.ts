import isArrayLike from "./isArrayLike";
import isBuffer from "./isBuffer";
import isTypedArray from "./isTypedArray";
import isArguments from "./isArguments";
import getTag from "./internal/getTag";
import isPrototype from "./internal/isPrototype";

/**
 * 判断是否是空对象，集合，map，set。数字与布尔值都判断为空
 * @param value
 */
function isEmpty(value: any) {
  if (value === null) {
    return true;
  }

  // 是否是各种类数组或者有长度的数据类型
  if (
    isArrayLike(value) ||
    Array.isArray(value) ||
    typeof value === "string" ||
    typeof value.splice === "function" ||
    isBuffer(value) ||
    isTypedArray(value) ||
    isArguments(value)
  ) {
    return !value.length;
  }

  // 有size的数据类型
  const tag = getTag(value);
  if (tag == "[object Map]" || tag == "[object Set]") {
    return !value.size;
  }

  // 是否是空的原型对象
  if (isPrototype(value)) {
    return !Object.keys(value).length;
  }

  // 是否是空对象
  for (let attr in value) {
    if (Object.prototype.hasOwnProperty.call(value, attr)) {
      return false;
    }
  }

  return true;
}

export default isEmpty;
