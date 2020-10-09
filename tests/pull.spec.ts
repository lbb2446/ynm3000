import pull from '../src/pull'
import { expect } from 'chai'
import 'mocha'

describe('pull fn', () => {
  it('pull', () => {
    let arr = ['a', 'b', 'c', 'a', 'b', 'c']
    const result = pull(arr, 'a', 'c')
    expect(result).to.have.deep.members(['b', 'b'])
  })
})
