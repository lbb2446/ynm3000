import nth from '../src/nth'
import { expect } from 'chai'
import 'mocha'

describe('nth fn', () => {
  it('nth', () => {
    const result = nth([1, 2, 3, 4], 2)
    expect(result).to.equal(3)
  })
  it('nth below 0', () => {
    const result = nth([1, 2, 3, 4], -2)
    expect(result).to.equal(3)
  })
})
