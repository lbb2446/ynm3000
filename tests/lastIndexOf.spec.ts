import lastIndexOf from '../src/lastIndexOf'
import { expect } from 'chai'
import 'mocha'

describe('lastIndexOf fn', () => {
  it('lastIndexOf1', () => {
    const result = lastIndexOf([1, 2, 1, 2], 2)
    expect(result).to.equal(3)
  })
  it('lastIndexOf2', () => {
    const result = lastIndexOf([1, 2, 1, 2], 2, 2)
    expect(result).to.equal(1)
  })
  it('lastIndexOf3', () => {
    const result = lastIndexOf([1, 2, 1, 2], 2, -1)
    expect(result).to.equal(3)
  })
})
