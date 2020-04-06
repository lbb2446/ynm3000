import keysIn from '../src/keysIn'
import { expect } from 'chai'
import 'mocha'

describe('keysIn', () => {
  it('in', () => {
    function Foo() {
      this.a = 1
      this.b = 2
    }
    Foo.prototype.c = 3
    const result = keysIn(new Foo())
    expect(result).to.have.deep.members(['a', 'b', 'c'])
  })
})
