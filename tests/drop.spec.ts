import drop from '../src/drop'
import { expect } from 'chai'
import 'mocha'

describe('drop fn', () => {
  it('drop1', () => {
    const result = drop([1, 2, 3])
    expect(result).to.have.members([2, 3])
  })
  it('drop2', () => {
    const result = drop([1, 2, 3], 2)
    expect(result).to.have.members([3])
  })
  it('drop3', () => {
    const result = drop([1, 2, 3], 5)
    expect(result).to.have.members([])
  })
  it('drop4', () => {
    const result = drop([1, 2, 3], 0)
    expect(result).to.have.members([1, 2, 3])
  })
})
