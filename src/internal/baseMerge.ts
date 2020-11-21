import baseFor from './baseFor'
import keysIn from '../keysIn'
import isObject from '../isObject'
import Stack from './Stack'
import baseMergeDeep from './baseMergeDeep'
import assignMergeValue from './assignMergeValue'

function baseMerge(object, source, srcIndex, customizer, stack?) {
  if (object === source) {
    return
  }
  baseFor(
    source,
    (srcValue, key) => {
      if (isObject(srcValue)) {
        stack || (stack = new Stack())
        baseMergeDeep(
          object,
          source,
          key,
          srcIndex,
          baseMerge,
          customizer,
          stack
        )
      } else {
        let newValue = customizer
          ? customizer(object[key], srcValue, `${key}`, object, source, stack)
          : undefined
        if (newValue === undefined) {
          newValue = srcValue
        }
        assignMergeValue(object, key, newValue)
      }
    },
    keysIn
  )
}

export default baseMerge
