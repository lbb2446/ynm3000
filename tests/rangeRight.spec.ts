import rangeRight from '../src/rangeRight'
import { expect } from 'chai'
import 'mocha'

describe('rangeRight fn', () => {
  it('rangeRight case1', () => {
    const result = rangeRight(4)
    expect(result).to.have.deep.members([3, 2, 1, 0])
  })
  it('rangeRight case2', () => {
    const result = rangeRight(-4)
    expect(result).to.have.deep.members([-3, -2, -1, 0])
  })
  it('rangeRight case3', () => {
    const result = rangeRight(1, 5)
    expect(result).to.have.deep.members([4, 3, 2, 1])
  })
  it('rangeRight case4', () => {
    const result = rangeRight(0, 20, 5)
    expect(result).to.have.deep.members([15, 10, 5, 0])
  })
  it('rangeRight case5', () => {
    const result = rangeRight(0, -4, -1)
    expect(result).to.have.deep.members([-3, -2, -1, 0])
  })
  it('rangeRight case6', () => {
    const result = rangeRight(1, 4, 0)
    expect(result).to.have.deep.members([1, 1, 1])
  })
  it('rangeRight case7', () => {
    const result = rangeRight(0)
    expect(result).to.have.deep.members([])
  })
})
