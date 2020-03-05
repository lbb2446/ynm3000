// TypedArray对象描述底层的二进制数据缓冲的阵列状的图
import nodeTypes from "./internal/nodeTypes";
import isObjectLike from "./isObjectLike";
import getTag from "./internal/getTag";

const nodeIsTypedArray = nodeTypes && nodeTypes.isTypedArray;

const regTypeTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/;

const isTypedArray = nodeIsTypedArray
  ? value => nodeIsTypedArray(value)
  : value => isObjectLike(value) && regTypeTag.test(getTag(value));

export default isTypedArray;
