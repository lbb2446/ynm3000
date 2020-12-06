import forOwnRight from '../src/forOwnRight'
import { expect } from 'chai'
import 'mocha'

describe('forOwnRight fn', () => {
  it('forOwnRight', () => {
    function Foo() {
      this.a = 1
      this.b = 2
    }
    Foo.prototype.c = 3
    forOwnRight(new Foo(), function (value, key) {
      console.log(value, key)
    })
    // const result = forOwnRight(1, 2)
    // expect(result).to.equal(3)
  })
})
