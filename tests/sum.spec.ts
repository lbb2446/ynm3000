import sum from '../src/sum'
import { expect } from 'chai'
import 'mocha'

describe('sum fn', () => {
  it('sum', () => {
    const result = sum([4, 2, 8, 6])
    expect(result).to.equal(20)
  })
})
