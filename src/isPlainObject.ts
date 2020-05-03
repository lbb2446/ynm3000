import isObjectLike from "./isObjectLike";
import getTag from "./internal/getTag";

/**
 * 正统的对象，包括Object.create(null)，由Object构造函数生成的对象，以及[[prototype]]为null的对象
 * 但是不包括new Foo这种构造函数返回的数据， 以及Object.create({})有内容的对象
 * @param value
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || getTag(value) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return proto === Object.getPrototypeOf(value);
}

export default isPlainObject;
