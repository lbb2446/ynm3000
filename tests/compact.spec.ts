import compact from '../src/compact'
import { expect } from 'chai'
import 'mocha'

describe('compact fn', () => {
  it('compact', () => {
    const result = compact([0, 1, false, 2, '', 3])
    expect(result).to.have.deep.members([1, 2, 3])
  })
})
