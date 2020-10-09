import pullAll from '../src/pullAll'
import { expect } from 'chai'
import 'mocha'

describe('pullAll fn', () => {
  it('pullAll', () => {
    let arr = ['a', 'b', 'c', 'a', 'b', 'c']
    const result = pullAll(arr, ['a', 'c'])
    expect(result).to.have.deep.members(['b', 'b'])
  })
})
