import customDefaultsMerge from './internal/customDefaultsMerge'
import mergeWith from './mergeWith'

function defaultsDeep(...args) {
  args.push(undefined, customDefaultsMerge)
  return mergeWith.apply(undefined, args)
}

export default defaultsDeep
