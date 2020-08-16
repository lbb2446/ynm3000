import size from '../src/size'
import { expect } from 'chai'
import 'mocha'

describe('size fn', () => {
  it('size1', () => {
    const result = size([1, 2, 3])
    expect(result).to.equal(3)
  })
  it('size2', () => {
    const result = size({ a: 1, b: 2 })
    expect(result).to.equal(2)
  })
  it('size3', () => {
    const result = size('pebbles')
    expect(result).to.equal(7)
  })
})
