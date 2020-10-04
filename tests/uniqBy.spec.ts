
import uniqBy from '../src/uniqBy'
import { expect } from 'chai'
import 'mocha'

describe('uniqBy fn', () => {
  it('uniqBy', () => {
    const result = uniqBy([2.1, 1.2, 2.3], Math.floor)
    expect(result).to.have.deep.members([2.1, 1.2])
  })
})