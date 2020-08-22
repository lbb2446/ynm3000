import sortedUniq from '../src/sortedUniq'
import { expect } from 'chai'
import 'mocha'

describe('sortedUniq fn', () => {
  it('sortedUniq', () => {
    const result = sortedUniq([1, 1, 2])
    expect(result).to.have.deep.members([1, 2])
  })
})
