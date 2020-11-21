import differenceWith from '../src/differenceWith'
import { expect } from 'chai'
import 'mocha'
import isEqual from '../src/isEqualWith'

describe('differenceWith fn', () => {
  it('differenceWith', () => {
    const objects = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
    ]
    const result = differenceWith(objects, [{ x: 1, y: 2 }], isEqual)
    expect(result).to.have.deep.equals([{ x: 2, y: 1 }])
  })
})
