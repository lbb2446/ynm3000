// @ts-nocheck
import freeGlobal from "./freeGlobal";

//判断exports.nodeType为空，为了防止错误的获取到dom元素，dom元素的nodeType从1开始赋值
//最后一个exports更像是一个返回值，如果前面全部通过，则返回这个参数，以&&的方式写函数

const freeExports =
  typeof exports === "object" &&
  exports !== null &&
  !exports.nodeType &&
  exports;

const freeModule =
  freeExports &&
  typeof module === "object" &&
  module !== null &&
  !module.nodeType &&
  module;

const moduleExports = freeModule && freeModule.exports === freeExports;
const freeProcess = moduleExports && freeGlobal.process;

// 返回类型
const nodeTypes = (() => {
  try {
    const typesHelper =
      freeModule && freeModule.require && freeModule.require("util").types;
    return typesHelper
      ? typesHelper
      : freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {}
})();

export default nodeTypes;
