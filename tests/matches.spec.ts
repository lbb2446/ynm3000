import matches from '../src/matches'
import { expect } from 'chai'
import 'mocha'
import filter from '../src/filter'

describe('matches fn', () => {
  it('matches', () => {
    const objects = [
      { a: 1, b: 2, c: 3 },
      { a: 4, b: 5, c: 6 },
    ]
    const result = filter(objects, matches({ a: 4, c: 6 }))
    expect(result).to.deep.equals([{ a: 4, b: 5, c: 6 }])
  })
})
