import matchesProperty from '../src/matchesProperty'
import { expect } from 'chai'
import 'mocha'

describe('matchesProperty fn', () => {
  it('matchesProperty', () => {
    const objects = [
      { a: 1, b: 2, c: 3 },
      { a: 4, b: 5, c: 6 },
    ]
    const fn = matchesProperty('a', 4)
    const result = objects.find((item) => fn(item))
    expect(result).to.deep.equals({ a: 4, b: 5, c: 6 })
  })
})
