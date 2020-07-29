import range from '../src/range'
import { expect } from 'chai'
import 'mocha'

describe('range fn', () => {
  it('range case1', () => {
    const result = range(4)
    expect(result).to.have.deep.members([0, 1, 2, 3])
  })
  it('range case2', () => {
    const result = range(-4)
    expect(result).to.have.deep.members([0, -1, -2, -3])
  })
  it('range case3', () => {
    const result = range(1, 5)
    expect(result).to.have.deep.members([1, 2, 3, 4])
  })
  it('range case4', () => {
    const result = range(0, 20, 5)
    expect(result).to.have.deep.members([0, 5, 10, 15])
  })
  it('range case5', () => {
    const result = range(0, -4, -1)
    expect(result).to.have.deep.members([0, -1, -2, -3])
  })
  it('range case6', () => {
    const result = range(1, 4, 0)
    expect(result).to.have.deep.members([1, 1, 1])
  })
  it('range case7', () => {
    const result = range(0)
    expect(result).to.have.deep.members([])
  })
})
