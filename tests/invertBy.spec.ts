import invertBy from '../src/invertBy'
import { expect } from 'chai'
import 'mocha'

describe('invertBy fn', () => {
  it('invertBy', () => {
    const result = invertBy({ a: 1, b: 2, c: 1 }, (value) => `group${value}`)
    expect(result).to.deep.equal({
      group1: ['a', 'c'],
      group2: ['b'],
    })
  })
})
