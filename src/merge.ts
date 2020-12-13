import createAssigner from './internal/createAssigner'
import baseMerge from './internal/baseMerge'

const merge = createAssigner((object, source, srcIndex) => {
  baseMerge(object, source, srcIndex)
})

export default merge
