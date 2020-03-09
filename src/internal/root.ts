// 获取当前根环境

// node
import freeGlobal from "./freeGlobal";

// window
const freeGlobalThis =
  typeof globalThis === "object" &&
  globalThis !== null &&
  globalThis.Object == Object &&
  globalThis;

// worker
const freeSelf =
  typeof self === "object" && self !== null && self.Object === Object && self;

const root =
  freeGlobalThis || freeGlobal || freeSelf || Function("return this")();
export default root;
