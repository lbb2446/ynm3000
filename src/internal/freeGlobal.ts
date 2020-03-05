// 判断global属性，用于辅助判断是否在node环境内
// @ts-nocheck
const freeGlobal =
  typeof global === "object" &&
  global !== null &&
  global.Object === Object &&
  global;
export default freeGlobal;
