function gt(value, other) {
  //两个都是字符串也可以直接比较的，只有一个是字符串一个是数字不好比较
  if (!(typeof value === 'string' && typeof other === 'string')) {
    value = +value
    other = +other
  }
  return value > other
}

export default gt
