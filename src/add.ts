import createMathOperation from './internal/createMathOperation'
const add = createMathOperation((augend, addend) => augend + addend, 0)

export default add
