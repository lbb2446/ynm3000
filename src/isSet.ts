import nodeTypes from "./internal/nodeTypes";
import getTags from "./internal/getTag";
import isObjectLike from "./isObjectLike";

const nodeTypesSet = nodeTypes.isSet;

const isSet = nodeTypesSet
  ? value => nodeTypesSet(value)
  : value => {
      isObjectLike(value) && getTags(value) == "[object Set]";
    };

export default isSet;
