import over from '../src/over'
import { expect } from 'chai'
import 'mocha'

describe('over fn', () => {
  it('over', () => {
    const fn = over([Math.max, Math.min])
    const result = fn(1, 2, 3, 4)
    expect(result).to.have.deep.members([4, 1])
  })
})
