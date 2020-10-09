import uniq from '../src/uniq'
import { expect } from 'chai'
import 'mocha'

describe('uniq fn', () => {
  it('uniq', () => {
    const result = uniq([2, 1, 2])
    expect(result).to.have.deep.members([2, 1])
  })
})
