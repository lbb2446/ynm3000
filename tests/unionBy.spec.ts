import unionBy from '../src/unionBy'
import { expect } from 'chai'
import 'mocha'

describe('unionBy fn', () => {
  it('unionBy', () => {
    const result = unionBy([2.1], [1.2, 2.3], Math.floor)
    expect(result).to.have.deep.members([2.1, 1.2])
  })
})
