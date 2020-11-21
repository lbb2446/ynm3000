import differenceBy from '../src/differenceBy'
import { expect } from 'chai'
import 'mocha'

describe('differenceBy fn', () => {
  it('differenceBy', () => {
    const result = differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
    expect(result).to.have.members([1.2])
  })
})
