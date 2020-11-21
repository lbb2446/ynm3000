import createMathOperation from './internal/createMathOperation'

const divide = createMathOperation((dividend, divisor) => dividend / divisor, 1)

export default divide
