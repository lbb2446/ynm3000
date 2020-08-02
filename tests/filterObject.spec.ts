import filterObject from '../src/filterObject'
import { expect } from 'chai'
import 'mocha'

describe('filterObject fn', () => {
  it('filterObject case1', () => {
    const object = { a: 5, b: 8, c: 10 }
    const result = filterObject(object, (n) => !(n % 5))
    expect(result).to.have.deep.members([5, 10])
  })
})
