import createMathOperation from './internal/createMathOperation'

/**
 * 将两个数相减
 */
const subtract = createMathOperation(
  (minuend, subtrahend) => minuend - subtrahend,
  0
)

export default subtract
