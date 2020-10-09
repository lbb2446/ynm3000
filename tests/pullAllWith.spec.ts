import pullAllWith from '../src/pullAllWith'
import { expect } from 'chai'
import 'mocha'

describe('pullAllWith fn', () => {
  it('pullAllWith', () => {
    const array = [
      { x: 1, y: 2 },
      { x: 1, y: 4 },
      { x: 5, y: 6 },
    ]
    const result = pullAllWith(
      array,
      [{ x: 1 }],
      (val, other) => val.x === other.x
    )
    expect(result).to.have.deep.members([{ x: 5, y: 6 }])
  })
})
