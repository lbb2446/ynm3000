import baseGet from './baseGet'
import map from '../map'
import baseSortBy from './baseSortBy'
import compareMultiple from './compareMultiple'

const identity = (value) => value

function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = iteratees.map((iteratee) => {
      if (Array.isArray(iteratee)) {
        return (value) =>
          baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee)
      }
      return (value) => baseGet(value, iteratee)
    })
  } else {
    iteratees = [identity]
  }

  let index = -1

  let result = map(collection, (value, key) => {
    return {
      criteria: iteratees.map((iteratee) => iteratee(value)),
      index: ++index,
      value,
    }
  })

  return baseSortBy(result, (object, other) =>
    compareMultiple(object, other, orders)
  )
}

export default baseOrderBy
