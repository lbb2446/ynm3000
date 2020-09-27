import unzip from '../src/unzip'
import { expect } from 'chai'
import 'mocha'

describe('unzip fn', () => {
  it('unzip', () => {
    const result = unzip([
      ['a', 1, true],
      ['b', 2, false],
    ])
    expect(result).to.deep.equals([
      ['a', 'b'],
      [1, 2],
      [true, false],
    ])
  })
})
