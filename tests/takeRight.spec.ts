import takeRight from '../src/takeRight'
import { expect } from 'chai'
import 'mocha'

describe('takeRight fn', () => {
  it('takeRight1', () => {
    const result = takeRight([1, 2, 3])
    expect(result).to.have.deep.members([3])
  })
  it('takeRight2', () => {
    const result = takeRight([1, 2, 3], 2)
    expect(result).to.have.deep.members([2, 3])
  })
  it('takeRight3', () => {
    const result = takeRight([1, 2, 3], 5)
    expect(result).to.have.deep.members([1, 2, 3])
  })
  it('takeRight4', () => {
    const result = takeRight([1, 2, 3], 0)
    expect(result).to.have.deep.members([])
  })
})
