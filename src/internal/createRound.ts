function createRound(methodName) {
  const func = Math[methodName]
  return (number, precision?) => {
    precision =
      precision == null
        ? 0
        : precision > 0
        ? Math.min(precision, 292)
        : Math.max(precision, -292)
    if (precision) {
      // 放大/缩小到可以用round函数来做处理，做完计算之后再缩小/放大回原来的精度
      let pair = `${number}e`.split('e')
      const value = func(`${pair[0]}e${+pair[1] + precision}`)

      pair = `${value}e`.split('e')
      return +`${pair[0]}e${+pair[1] - precision}`
    }
    return func(number)
  }
}

export default createRound
