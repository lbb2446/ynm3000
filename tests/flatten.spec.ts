import flatten from '../src/flatten'
import { expect } from 'chai'
import 'mocha'

describe('flatten fn', () => {
  it('flatten', () => {
    const result = flatten([1, [2, [3, [4]], 5]])
    expect(result).to.deep.equals([1, 2, [3, [4]], 5])
  })
})
