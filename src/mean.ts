import meanBy from './meanBy'

function mean(array) {
  return meanBy(array, (val) => val)
}

export default mean
