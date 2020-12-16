import multiply from '../src/multiply'
import { expect } from 'chai'
import 'mocha'

describe('multiply fn', () => {
  it('multiply1', () => {
    const result = multiply(1, 2)
    expect(result).to.equal(2)
  })
  it('multiply2', () => {
    const result = multiply(6, 4)
    expect(result).to.equal(24)
  })
})
