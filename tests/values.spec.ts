import values from '../src/values'
import { expect } from 'chai'
import 'mocha'

describe('values fn', () => {
  it('values obj', () => {
    function Foo() {
      this.a = 1
      this.b = 2
    }
    Foo.prototype.c = 3

    const result = values(new Foo())
    expect(result).to.have.deep.members([1, 2])
  })
  it('values str', () => {
    const result = values('str')
    expect(result).to.have.deep.members(['s', 't', 'r'])
  })
})
