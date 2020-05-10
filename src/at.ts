import baseAt from './internal/baseAt'
import baseFlatten from './internal/baseFlatten'

const at = (object, ...paths) => baseAt(object, baseFlatten(paths, 1))

export default at
