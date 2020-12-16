import flow from '../src/flow'
import { expect } from 'chai'
import 'mocha'

describe('flow fn', () => {
  it('flow', () => {
    function square(n) {
      return n * n
    }
    function add(a, b) {
      return a + b
    }
    const addSquare = flow(add, square)
    const result = addSquare(1, 2)
    expect(result).to.equal(9)
  })
})
