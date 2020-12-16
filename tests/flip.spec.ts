import flip from '../src/flip'
import { expect } from 'chai'
import 'mocha'

describe('flip fn', () => {
  it('flip', () => {
    const flipped = flip((...args) => args)
    const result = flipped('a', 'b', 'c', 'd')
    expect(result).to.have.members(['d', 'c', 'b', 'a'])
  })
})
