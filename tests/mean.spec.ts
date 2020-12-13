import mean from '../src/mean'
import { expect } from 'chai'
import 'mocha'

describe('mean fn', () => {
  it('mean', () => {
    const result = mean([4, 2, 8, 6])
    expect(result).to.equal(5)
  })
})
