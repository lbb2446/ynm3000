
import zipWith from '../src/zipWith'
import { expect } from 'chai'
import 'mocha'

describe('zipWith fn', () => {
  it('zipWith', () => {
    const result = zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c)
    expect(result).to.deep.equals([111, 222])
  })
})

