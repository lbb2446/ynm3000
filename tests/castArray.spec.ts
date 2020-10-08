import castArray from '../src/castArray'
import { expect } from 'chai'
import 'mocha'

describe('castArray fn', () => {
  it('castArray1', () => {
    const result = castArray(1, 2)
    expect(result).to.have.deep.members([1])
  })
  it('castArray2', () => {
    const result = castArray({ 'a': 1 })
    expect(result).deep.equals([{ 'a': 1 }])
  })
  it('castArray3', () => {
    const result = castArray('abc')
    expect(result).to.have.deep.members(['abc'])
  })
  it('castArray4', () => {
    const result = castArray(null)
    expect(result).to.have.deep.members([null])
  })
  it('castArray5', () => {
    const result = castArray(undefined)
    expect(result).to.have.deep.members([undefined])
  })
  it('castArray6', () => {
    const result = castArray()
    expect(result).to.have.deep.members([])
  })
  it('castArray7', () => {
    const arr = [1, 2, 3]
    const result = castArray(arr)
    expect(result===arr).to.be.true
  })
})