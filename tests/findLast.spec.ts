import findLast from '../src/findLast'
import { expect } from 'chai'
import 'mocha'

describe('findLast fn', () => {
  it('findLast1', () => {
    const result = findLast([1, 2, 3, 4], (n) => n % 2 == 1)
    expect(result).to.equal(3)
  })
  it('findLast2', () => {
    const result = findLast({ a: 1, b: 2, c: 3, d: 4 }, (n) => n % 2 == 1)
    expect(result).to.equal(3)
  })
})
