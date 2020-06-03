import last from '../src/last'
import { expect } from 'chai'
import 'mocha'

describe('last fn', () => {
  it('last', () => {
    const result = last([1, 2, 3])
    expect(result).to.equal(3)
  })
})
