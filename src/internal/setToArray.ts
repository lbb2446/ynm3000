function setToArray(set) {
  let array = []
  //TODO:和lodash写法不一样，但是感觉功能相同，以后如果出问题，可以看看这里
  set.forEach(item => {
    array.push(item)
  })

  return array
}

export default setToArray
