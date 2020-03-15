// 比较两个数是否相等
// 是否完全相同
function eq(val, other) {
  return val === other || (val !== val && other !== other)
}

export default eq
