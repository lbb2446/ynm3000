import once from '../src/once'
import { expect } from 'chai'
import 'mocha'

describe('once fn', () => {
  let arr = []
  let index = 0
  function _push() {
    arr.push(++index)
  }
  it('once', () => {
    const result = once(_push)
    result()
    result()
    result()
    result()
    expect(arr).to.have.deep.members([1])
  })
})
