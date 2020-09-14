import toPlainObject from '../src/toPlainObject'
import { expect } from 'chai'
import 'mocha'

describe('toPlainObject fn', () => {
  it('toPlainObject', () => {
    function Foo() {
      this.b = 2
    }

    Foo.prototype.c = 3

    const result = Object.assign({ a: 1 }, toPlainObject(new Foo()))
    expect(result).to.deep.equal({ a: 1, b: 2, c: 3 })
  })
})
