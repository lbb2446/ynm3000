import map from './map'

function cond(pairs) {
  const length = pairs == null ? 0 : pairs.length
  length
    ? map(pairs, (pair) => {
        if (typeof pair[1] !== 'function') {
          throw new TypeError('Expected function')
        }
        return [pair[0], pair[1]]
      })
    : []

  return (...args) => {
    for (const pair of pairs) {
      if (pair[0].apply(this, args)) {
        return pair[1].apply(this, args)
      }
    }
  }
}

export default cond
