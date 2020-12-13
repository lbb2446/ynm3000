import invoke from './invoke'

function method(path, args?) {
  return (object) => invoke(object, path, args)
}

export default method
