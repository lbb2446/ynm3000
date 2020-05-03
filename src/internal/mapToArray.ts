function mapToArray(map) {
  //TODO:和lodash写法不一样，但是感觉功能相同，以后如果出问题，可以看看这里,同setToArray
  let arr = []
  map.forEach((value, key) => {
    arr.push([key, value])
  })

  return arr
}

export default mapToArray
