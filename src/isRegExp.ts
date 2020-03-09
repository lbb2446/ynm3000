import nodeTypes from "./internal/nodeTypes";
import isObjectLike from "./isObjectLike";
import getTag from "./internal/getTag";

const nodeTypeReg = nodeTypes && nodeTypes.isRegExp;

const isRegExp = nodeTypeReg
  ? value => nodeTypeReg(value)
  : value => {
      isObjectLike(value) && getTag(value) === "[object RegExp]";
    };

export default isRegExp;
