import createAssigner from './internal/createAssigner'
import baseMerge from './internal/baseMerge'

const mergeWith = createAssigner((object, source, srcIndex, customizer) => {
  baseMerge(object, source, srcIndex, customizer)
})

export default mergeWith
