import functions from '../src/functions'
import { expect } from 'chai'
import 'mocha'

describe('functions fn', () => {
  it('functions', () => {
    function Foo() {
      this.a = () => 'a'
      this.b = () => 'b'
    }
    Foo.prototype.c = () => 'c'
    const result = functions(new Foo())
    expect(result).to.have.members(['a', 'b'])
  })
})
