import intersectionBy from '../src/intersectionBy'
import { expect } from 'chai'
import 'mocha'

describe('intersectionBy fn', () => {
  it('intersectionBy', () => {
    const result = intersectionBy([1.5, 2.1], [1.6, 5.3], Math.floor)
    expect(result).to.have.deep.members([1.5])
  })
})
