function baseConformsTo(object, source, props){
  let length = props.length
  if(!object){
    return !length
  }
  object = Object(object)
  while(length--){
    const key = props[length]
    const value = object[key]
    const predicate = source[key]
    if((value===undefined && !(key in object))|| !predicate(value)){
      return false
    }
  }
  return true
}

export default baseConformsTo