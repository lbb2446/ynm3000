import take from '../src/take'
import { expect } from 'chai'
import 'mocha'

describe('take fn', () => {
  it('take1', () => {
    const result = take([1, 2, 3])
    expect(result).to.have.deep.members([1])
  })
  it('take2', () => {
    const result = take([1, 2, 3], 2)
    expect(result).to.have.deep.members([1, 2])
  })
  it('take3', () => {
    const result = take([1, 2, 3], 5)
    expect(result).to.have.deep.members([1, 2, 3])
  })
  it('take4', () => {
    const result = take([1, 2, 3], 0)
    expect(result).to.have.deep.members([])
  })
})
