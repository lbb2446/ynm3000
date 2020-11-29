import flow from './flow'

function flowRight(...funcs) {
  return flow(...funcs.reverse())
}

export default flowRight
