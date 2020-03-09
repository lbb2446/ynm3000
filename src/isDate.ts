import nodeTypes from "./internal/nodeTypes";
import isObjectLike from "./isObjectLike";
import getTag from "./internal/getTag";

const nodeTypesDate = nodeTypes && nodeTypes.isDate;

const isDate = nodeTypesDate
  ? value => nodeTypesDate(value)
  : value => {
      isObjectLike(value) && getTag(value) === "[object Date]";
    };
export default isDate;
