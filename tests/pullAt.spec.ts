import pullAt from '../src/pullAt'
import { expect } from 'chai'
import 'mocha'

describe('pullAt fn', () => {
  const array = ['a', 'b', 'c', 'd']
  const pulled = pullAt(array, [3, 1])
  it('pullAt array', () => {
    expect(array).to.have.deep.members(['a', 'c'])
  })
  it('pullAt pulled', () => {
    expect(pulled).to.have.deep.members(['b', 'd'])
  })
})
