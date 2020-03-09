import nodeTypes from "./internal/nodeTypes";
import isObjectLike from "./isObjectLike";
import getTag from "./internal/getTag";

const nodeTypeArrBuf = nodeTypes.isArrayBuffer;

const isArrayBuffer = nodeTypeArrBuf
  ? value => nodeTypeArrBuf(value)
  : value => {
      isObjectLike(value) && getTag(value) === "[object ArrayBuffer]";
    };

export default isArrayBuffer;
