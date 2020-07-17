import some from './some'

function overSome(iteratees) {
  return function (...args) {
    return some(iteratees, (iteratee) => iteratee.apply(this, args))
  }
}

export default overSome
