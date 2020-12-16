import forOwn from '../src/forOwn'
import { expect } from 'chai'
import 'mocha'

describe('forOwn fn', () => {
  it('forOwn', () => {
    function Foo() {
      this.a = 1
      this.b = 2
    }
    Foo.prototype.c = 3
    forOwn(new Foo(), function (value, key) {
      console.log(value, key)
    })
    // const result = forOwn(1, 2)
    // expect(result).to.equal(3)
  })
})
