import nodeTypes from "./internal/nodeTypes";
import getTags from "./internal/getTag";
import isObjectLike from "./isObjectLike";

const nodeTypesMap = nodeTypes.isMap;

const isMap = nodeTypesMap
  ? value => nodeTypesMap(value)
  : value => {
      isObjectLike(value) && getTags(value) == "[object Map]";
    };

export default isMap;
