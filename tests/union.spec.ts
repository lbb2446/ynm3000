import union from '../src/union'
import { expect } from 'chai'
import 'mocha'

describe('union fn', () => {
  it('union', () => {
    const result = union([2, 3], [1, 2])
    expect(result).to.have.deep.members([2, 3, 1])
  })
})
