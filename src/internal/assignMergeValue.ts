import eq from '../eq'
import baseAssignValue from './baseAssignValue'

function assignMergeValue(object, key, value) {
  if (
    (value !== undefined && !eq(object[key], value)) ||
    (value === undefined && !(key in object))
  ) {
    baseAssignValue(object, key, value)
  }
}

export default assignMergeValue
