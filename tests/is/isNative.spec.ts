import isNative from '../../src/isNative'
import { expect } from 'chai'
import 'mocha'

describe('is native', () => {
  it('是原生方法', () => {
    const result = isNative(Array.prototype.push)
    expect(result).to.equal(true)
  })
  it('是自定义方法', () => {
    const my_fn = function() {
      console.log(this)
    }
    const result = isNative(my_fn)
    expect(result).to.equal(false)
  })
})
