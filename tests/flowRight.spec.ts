import flowRight from '../src/flowRight'
import { expect } from 'chai'
import 'mocha'

describe('flowRight fn', () => {
  it('flowRight', () => {
    function square(n) {
      return n * n
    }
    function add(a, b) {
      return a + b
    }
    const addSquare = flowRight(square, add)
    const result = addSquare(1, 2)
    expect(result).to.equal(9)
  })
})
