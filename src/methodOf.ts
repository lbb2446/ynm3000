import invoke from './invoke'

function methodOf(object, args?) {
  return (path) => invoke(object, path, args)
}

export default methodOf
