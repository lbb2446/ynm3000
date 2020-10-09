import unionWith from '../src/unionWith'
import isEqualWith from '../src/isEqualWith'
import { expect } from 'chai'
import 'mocha'

describe('unionWith fn', () => {
  it('unionWith', () => {
    const objects = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
    ]
    const others = [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
    ]
    const result = unionWith(objects, others, isEqualWith)
    expect(result).to.deep.equals([
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 1, y: 1 },
    ])
  })
})
