import chunk from '../src/chunk'
import { expect } from 'chai'
import 'mocha'

describe('chunk fn', () => {
  it('chunk1', () => {
    const result = chunk(['a', 'b', 'c', 'd'], 2)
    expect(result).to.have.deep.members([['a', 'b'], ['c', 'd']])
  })
  it('chunk2', () => {
    const result = chunk(['a', 'b', 'c', 'd'], 3)
    expect(result).to.have.deep.members([['a', 'b', 'c'], ['d']])
  })
})