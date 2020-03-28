import keys from '../src/keys'
import { expect } from 'chai'
import 'mocha'

describe('get keys', () => {
  it('object', () => {
    function Foo() {
      this.a = 1
      this.b = 2
    }
    Foo.prototype.c = 3
    const result = keys(new Foo())
    expect(result).to.have.deep.members(['a', 'b'])
  })
  it('is array alike', () => {
    const result = keys('hi')
    expect(result).to.have.deep.members(['0', '1'])
  })
})
