import zipObjectDeep from '../src/zipObjectDeep'
import { expect } from 'chai'
import 'mocha'

describe('zipObjectDeep fn', () => {
  it('zipObjectDeep', () => {
    const result = zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])
    expect(result).to.deep.equals({ 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } })
  })
})
