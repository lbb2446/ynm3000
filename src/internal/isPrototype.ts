/**
 * 判断value是否是原型对象
 * @param value
 */
//TODO:待进一步理解
function isPrototype(value) {
  const _construct = value && value.constructor;
  const proto =
    (typeof _construct === "function" && _construct.prototype) ||
    Object.prototype;

  return value === proto;
}

export default isPrototype;
