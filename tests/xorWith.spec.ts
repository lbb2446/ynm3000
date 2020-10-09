import xorWith from '../src/xorWith'
import isEqualWith from '../src/isEqualWith'
import { expect } from 'chai'
import 'mocha'

describe('xorWith fn', () => {
  it('xorWith', () => {
    const objects = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
    ]
    const others = [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
    ]
    const result = xorWith(objects, others, isEqualWith)
    expect(result).to.deep.equals([
      { x: 2, y: 1 },
      { x: 1, y: 1 },
    ])
  })
})
