import flatMap from '../src/flatMap'
import { expect } from 'chai'
import 'mocha'

describe('flatMap fn', () => {
  it('flatMap', () => {
    function duplicate(n) {
      return [n, n]
    }
    const result = flatMap([1, 2], duplicate)
    expect(result).to.have.members([1, 1, 2, 2])
  })
})
