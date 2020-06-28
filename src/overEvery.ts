import every from './every'

function overEvery(iteratees) {
  return function (...args) {
    return every(iteratees, (iteratee) => iteratee.apply(this, args))
  }
}

export default overEvery
