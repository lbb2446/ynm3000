import split from '../src/split'
import { expect } from 'chai'
import 'mocha'

describe('split fn', () => {
  const arr = 'a-b-c'
  it('split1', () => {
    const result = split(arr, '-')
    expect(result).to.have.deep.members(['a', 'b', 'c'])
  })
  it('split2', () => {
    const result = split(arr, '-', 2)
    expect(result).to.have.deep.members(['a', 'b'])
  })
})
