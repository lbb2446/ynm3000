import indexOf from '../src/indexOf'
import { expect } from 'chai'
import 'mocha'

describe('indexOf fn', () => {
  it('indexOf1', () => {
    const result = indexOf([1, 2, 1, 2], 2)
    expect(result).to.equal(1)
  })
  it('indexOf2', () => {
    const result = indexOf([1, 2, 1, 2], 2, 2)
    expect(result).to.equal(3)
  })
  it('indexOf3', () => {
    const result = indexOf([1, 2, 1, 2], 5)
    expect(result).to.equal(-1)
  })
  it('indexOf4', () => {
    const result = indexOf([1, 2, 1, 2], 2, -2)
    expect(result).to.equal(3)
  })
})
