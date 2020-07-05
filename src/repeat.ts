/**
 *
 * @param string
 * @param n
 */
function repeat(string, n) {
  let result = ''
  if (!string || n < 1 || n > Number.MAX_SAFE_INTEGER) {
    return result
  }

  // 复制也可以用二分思维，大大减少了循环次数
  do {
    // 奇数经过一次计算就会变成偶数，第一次赋一个值，之后遍历完了最后一次赋一个值
    if (n % 2) {
      result += string
    }
    n = Math.floor(n / 2)
    if (n) {
      string += string
    }
  } while (n)
  return result
}

export default repeat
