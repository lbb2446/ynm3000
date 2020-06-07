import invokeMap from '../src/invokeMap'
import { expect } from 'chai'
import 'mocha'

describe('invokeMap fn', () => {
  it('invokeMap1', () => {
    const result = invokeMap(
      [
        [5, 1, 7],
        [3, 2, 1],
      ],
      'sort'
    )
    expect(result).to.have.deep.members([
      [1, 5, 7],
      [1, 2, 3],
    ])
  })
  it('invokeMap2', () => {
    const result = invokeMap([123, 456], String.prototype.split, [''])
    expect(result).to.have.deep.members([
      ['1', '2', '3'],
      ['4', '5', '6'],
    ])
  })
  it('invokeMap3', () => {
    const result = invokeMap(
      [{ a: [{ b: { c: [1, 2, 3, 4] } }] }],
      'a[0].b.c.slice',
      [1, 3]
    )
    expect(result).to.have.deep.members([[2, 3]])
  })
})
