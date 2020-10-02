import zipObject from '../src/zipObject'
import { expect } from 'chai'
import 'mocha'

describe('zipObject fn', () => {
  it('zipObject', () => {
    const result = zipObject(['a', 'b'], [1, 2])
    expect(result).to.deep.equals({ 'a': 1, 'b': 2 })
  })
})
