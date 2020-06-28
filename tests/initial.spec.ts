import initial from '../src/initial'
import { expect } from 'chai'
import 'mocha'

describe('initial fn', () => {
  it('initial', () => {
    const result = initial([1, 2, 3])
    expect(result).to.have.deep.members([1, 2])
  })
})
