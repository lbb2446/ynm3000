import map from './map'

function over(iteratees) {
  return function (...args) {
    return map(iteratees, (iteratee) => iteratee.apply(this, args))
  }
}

export default over
