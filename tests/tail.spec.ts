import tail from '../src/tail'
import { expect } from 'chai'
import 'mocha'

describe('tail fn', () => {
  it('tail', () => {
    const result = tail([1, 2, 3])
    expect(result).to.have.deep.members([2, 3])
  })
})
