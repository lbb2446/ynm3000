import toArray from '../src/toArray'
import { expect } from 'chai'
import 'mocha'

describe('toArray fn', () => {
  it('toArray1', () => {
    const result = toArray({ a: 1, b: 2 })
    expect(result).to.have.deep.members([1, 2])
  })
  it('toArray2', () => {
    const result = toArray('abc')
    expect(result).to.have.deep.members(['a', 'b', 'c'])
  })
  it('toArray3', () => {
    const result = toArray(1)
    expect(result).to.have.deep.members([])
  })
  it('toArray4', () => {
    const result = toArray(null)
    expect(result).to.have.deep.members([])
  })
  it('toArray5', () => {
    let _set = new Set()
    _set.add(1)
    _set.add(2)
    const result = toArray(_set)
    expect(result).to.have.deep.members([1, 2])
  })
  it('toArray6', () => {
    let _map = new Map()
    _map.set('a', 1)
    _map.set('b', 2)
    const result = toArray(_map)
    expect(result).to.have.deep.members([
      ['a', 1],
      ['b', 2],
    ])
  })
})
